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
declare class UserGenerator {
    private options;
    private charSets;
    private generatedEmails;
    constructor(options?: UserGeneratorOptions);
    private getRandomElement;
    private generateEmail;
    private generatePassword;
    private generateUsername;
    private generateAge;
    private generateBirthDate;
    private generatePhoneNumber;
    private generateUser;
    getZiUser(numUsers?: number): User | User[];
    exportToJson(users: User | User[], filename: string): void;
    exportToCsv(users: User | User[], filename: string): void;
}
export default UserGenerator;
