import { login } from "./auth";

const testCases = [
  { name: "valid login", username: "malek", password: "Test1234", expected: "Welcome" },
  { name: "wrong password", username: "malek", password: "wrong", expected: "Invalid username or password" },
  { name: "empty username", username: "", password: "Test1234", expected: "Username and password are required" },
];

const runTests = async () => {
  for (const tc of testCases) {
    const actual = await login(tc.username, tc.password);

    if (actual === tc.expected) {
      console.log(`PASS: ${tc.name}`);
    } else {
      console.log(`FAIL: ${tc.name} → expected "${tc.expected}", got "${actual}"`);
    }
  }
};

runTests();