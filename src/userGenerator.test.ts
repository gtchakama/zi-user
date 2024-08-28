import UserGenerator from "./userGenerator";

describe("UserGenerator", () => {
  let generator: UserGenerator;

  beforeEach(() => {
    generator = new UserGenerator();
  });

  test("generates a single user", () => {
    const user = generator.getZiUser() as any;
    expect(user).toHaveProperty("firstName");
    expect(user).toHaveProperty("lastName");
    expect(user).toHaveProperty("email");
    expect(user).toHaveProperty("password");
    expect(user).toHaveProperty("username");
    expect(user).toHaveProperty("age");
    expect(user).toHaveProperty("birthDate");
    expect(user).toHaveProperty("phoneNumber");
  });

  test("generates multiple users", () => {
    const users = generator.getZiUser(5) as any[];
    expect(users).toHaveLength(5);
    users.forEach((user) => {
      expect(user).toHaveProperty("firstName");
      expect(user).toHaveProperty("lastName");
      expect(user).toHaveProperty("email");
      expect(user).toHaveProperty("password");
      expect(user).toHaveProperty("username");
      expect(user).toHaveProperty("age");
      expect(user).toHaveProperty("birthDate");
      expect(user).toHaveProperty("phoneNumber");
    });
  });

  test("exports to JSON", () => {
    const user = generator.getZiUser() as any;
    generator.exportToJson(user, "test.json");
    // You would typically read the file and check its contents here
  });

  test("exports to CSV", () => {
    const user = generator.getZiUser() as any;
    generator.exportToCsv(user, "test.csv");
    // You would typically read the file and check its contents here
  });
});
