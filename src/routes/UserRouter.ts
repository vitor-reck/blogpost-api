import { Router } from "express";
import { userService } from "../services/UserService";

export const userRouter = Router();

// List Users
userRouter.get("/api/v1/users", userService.listUsers);

// Get User by id
userRouter.get("/api/v1/user/:userId", userService.getUser);

// Create User
userRouter.post("/api/v1/user", userService.createUser);

// Alter User if active is true or false
userRouter.patch("/api/v1/user/:userId", userService.alterActiveUser);
