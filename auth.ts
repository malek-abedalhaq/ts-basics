export type User = {
  username: string;
  password: string;
};

const users: User[] = [
  { username: "standard_user", password: "secret_sauce" },
  { username: "malek", password: "Test1234" },
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const login = async (username: string, password: string): Promise<string> => {
  await wait(1000);

  if (username === "" || password === "") {
    return "Username and password are required";
  }

  const found = users.find((u) => u.username === username && u.password === password);

  if (found) {
    return "Welcome";
  }

  return "Invalid username or password";
};