import { Request, Response } from "express";
import { User } from "../models/User";

export const userService = {
  async listUsers(req: Request, res: Response) {
    const users = await User.find();
    res.status(200).json(users);
  },

  async getUser(req: Request, res: Response) {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (user != null) {
      res.status(200).json(user);
    }
  },

  async createUser(req: Request, res: Response) {
    const { name, age, email, active } = req.body;
    const user = await User.create({ name, age, email, active });
    res.status(201).json("User was created successfully.");
  },

  async alterActiveUser(req: Request, res: Response) {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (user != null) {
      await User.findByIdAndUpdate(userId, { active: !user.active });
      res.status(200).json("User activity has changed.");
    }
  },
};
