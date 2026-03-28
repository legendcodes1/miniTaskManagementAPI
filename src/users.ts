// data/users.ts
// import { User } from "../types/User";

export const users = [
  {
    id: "1",
    username: "faruq",
    email: "faruq@example.com",
    password: "hashed_password_123",
    role: "admin",
    createdAt: "2026-01-01T10:00:00Z",
    isActive: true,
  },
  {
    id: "2",
    username: "john_doe",
    email: "john@example.com",
    password: "hashed_password_456",
    role: "user",
    createdAt: "2026-01-05T14:30:00Z",
    isActive: true,
  },
  {
    id: "3",
    username: "jane_smith",
    email: "jane@example.com",
    password: "hashed_password_789",
    role: "user",
    createdAt: "2026-01-10T09:15:00Z",
    isActive: false,
  },
  {
    id: "4",
    username: "dev_guy",
    email: "dev@example.com",
    password: "hashed_password_abc",
    role: "user",
    createdAt: "2026-02-01T18:45:00Z",
    isActive: true,
  },
];

export default users;