import { writeFileSync } from "fs";
import fakeUsers from "./users";

interface UserGeneratorOptions {
  emailDomain?: string;
  passwordLength?: number;
  usernameFormat?: "firstLast" | "firstInitialLast" | "firstDotLast";
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  age: number;
  birthDate: Date;
  phoneNumber: string;
  [key: string]: string | number | Date;
}

class UserGenerator {
  private options: Required<UserGeneratorOptions>;
  private charSets: { [key: string]: string };
  private generatedEmails: Set<string>;

  constructor(options: UserGeneratorOptions = {}) {
    this.options = {
      emailDomain: options.emailDomain || "gmail.com",
      passwordLength: options.passwordLength || 12,
      usernameFormat: options.usernameFormat || "firstLast",
    };

    this.charSets = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numeric: "0123456789",
      special: "!@#$%^&*()_+-=",
    };

    this.generatedEmails = new Set();
  }

  private getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private generateEmail(firstName: string, lastName: string): string {
    let email: string;
    do {
      const randomNum = Math.floor(Math.random() * 10000);
      email = `${firstName.toLowerCase().slice(0, 3)}.${lastName.toLowerCase()}${randomNum}@${this.options.emailDomain}`;
    } while (this.generatedEmails.has(email));

    this.generatedEmails.add(email);
    return email;
  }

  private generatePassword(): string {
    const allChars = Object.values(this.charSets).join("");
    let password = "";

    // Ensure at least one character from each set
    for (const charSet of Object.values(this.charSets)) {
      password += this.getRandomElement(charSet.split(""));
    }

    // Fill the rest with random characters
    for (let i = password.length; i < this.options.passwordLength; i++) {
      password += this.getRandomElement(allChars.split(""));
    }

    return password
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
  }

  private generateUsername(firstName: string, lastName: string): string {
    switch (this.options.usernameFormat) {
      case "firstLast":
        return `${firstName}${lastName}`;
      case "firstInitialLast":
        return `${firstName[0]}${lastName}`;
      case "firstDotLast":
        return `${firstName}.${lastName}`;
      default:
        return `${firstName}${lastName}`;
    }
  }

  private generateAge(): number {
    return Math.floor(Math.random() * (80 - 18 + 1)) + 18;
  }

  private generateBirthDate(age: number): Date {
    const now = new Date();
    const birthYear = now.getFullYear() - age;
    const birthMonth = Math.floor(Math.random() * 12);
    const birthDay = Math.floor(Math.random() * 28) + 1; // Simplified, doesn't account for varying days in months
    return new Date(birthYear, birthMonth, birthDay);
  }

  private generatePhoneNumber(): string {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const firstPart = Math.floor(Math.random() * 900) + 100;
    const secondPart = Math.floor(Math.random() * 9000) + 1000;
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }

  private generateUser(): User {
    const firstName = this.getRandomElement(fakeUsers.first);
    const lastName = this.getRandomElement(fakeUsers.last);
    const email = this.generateEmail(firstName, lastName);
    const password = this.generatePassword();
    const username = this.generateUsername(firstName, lastName);
    const age = this.generateAge();
    const birthDate = this.generateBirthDate(age);
    const phoneNumber = this.generatePhoneNumber();

    return {
      firstName,
      lastName,
      email,
      password,
      username,
      age,
      birthDate,
      phoneNumber,
    };
  }

  getZiUser(numUsers: number = 1): User | User[] {
    if (numUsers < 1) {
      throw new Error("Number of users must be at least 1");
    }

    const users = Array.from({ length: numUsers }, () => this.generateUser());
    return numUsers === 1 ? users[0] : users;
  }

  exportToJson(users: User | User[], filename: string): void {
    const data = JSON.stringify(users, null, 2);
    writeFileSync(filename, data);
  }

  exportToCsv(users: User | User[], filename: string): void {
    const headers = [
      "firstName",
      "lastName",
      "email",
      "password",
      "username",
      "age",
      "birthDate",
      "phoneNumber",
    ];
    const csvData = [headers.join(",")];

    const processUser = (user: User) => {
      const values = headers.map((header) => {
        if (header === "birthDate") {
          return user[header].toISOString();
        }
        return `"${user[header]}"`;
      });
      csvData.push(values.join(","));
    };

    if (Array.isArray(users)) {
      users.forEach(processUser);
    } else {
      processUser(users);
    }

    writeFileSync(filename, csvData.join("\n"));
  }
}

export default UserGenerator;
