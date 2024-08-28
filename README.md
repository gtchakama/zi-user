# Zi-User

Zi-User is a robust TypeScript package for generating random user objects with realistic fake names, emails, passwords, usernames, and additional details. It's designed to be flexible, easy to use, and perfect for testing, development, and demonstration purposes.

## Features

- Generate single or multiple user objects
- Realistic first names and last names
- Email generation based on user names (with uniqueness check)
- Strong password generation with mixed character types
- Username creation from first and last names (with format options)
- Additional user properties: age, birth date, phone number
- Export generated users to JSON or CSV
- Written in TypeScript for better type safety
- Customizable options

## Installation

Install Zi-User via npm:

```bash
npm install zi-user
```

## Usage

Here's how to use Zi-User in your TypeScript project:

```typescript
import UserGenerator from 'zi-user';

// Create a generator with custom options
const generator = new UserGenerator({
  emailDomain: 'example.com',
  passwordLength: 16,
  usernameFormat: 'firstDotLast'
});

// Generate a single user
const user = generator.getZiUser();
console.log(user);

// Generate multiple users
const users = generator.getZiUser(5);
console.log(users);

// Export users to JSON
generator.exportToJson(users, 'users.json');

// Export users to CSV
generator.exportToCsv(users, 'users.csv');
```

## API

### `UserGenerator`

#### Constructor

```typescript
new UserGenerator(options?: UserGeneratorOptions)
```

- `options` (optional): An object with the following properties:
  - `emailDomain`: Domain for generated email addresses (default: 'gmail.com')
  - `passwordLength`: Length of generated passwords (default: 12)
  - `usernameFormat`: Format for usernames ('firstLast', 'firstInitialLast', or 'firstDotLast', default: 'firstLast')

#### Methods

- `getZiUser(numUsers?: number): User | User[]`
  - Generates user objects with random data.
  - `numUsers` (optional): Number of users to generate. Defaults to 1.
  - Returns: A single user object if `numUsers` is 1, otherwise an array of user objects.
  - Throws an error if `numUsers` is less than 1.

- `exportToJson(users: User | User[], filename: string): void`
  - Exports user(s) to a JSON file.
  - `users`: User or array of users to export
  - `filename`: Name of the file to save

- `exportToCsv(users: User | User[], filename: string): void`
  - Exports user(s) to a CSV file.
  - `users`: User or array of users to export
  - `filename`: Name of the file to save

### User Object

Each user object contains:
- `firstName`: A random first name
- `lastName`: A random last name
- `email`: A unique email address generated from the name
- `password`: A strong random password
- `username`: A username created from the first and last name
- `age`: A random age between 18 and 80
- `birthDate`: A birth date consistent with the age
- `phoneNumber`: A random phone number

## Testing

To run the tests:

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This package is open source and available under the [MIT License](LICENSE).

## Author

Created and maintained by George Chakama.

---

For more information or to report issues, please visit the [GitHub repository](https://github.com/gtchakama/zi-user).
