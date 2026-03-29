import express, { type Request, type Response } from 'express';
import { userService } from '../services/userService.ts';

export const userController = {
  getUsers(req: Request, res: Response) {
    const users = userService.getAllUsers();
    res.status(200).json({ success: true, data: users });
  },

  getUser(req: Request, res: Response) {
    try {
      const user = userService.getUserById(req.params.id);
      res.status(200).json({ success: true, data: user });
    } catch (err: any) {
      res.status(404).json({ success: false, message: err.message });
    }
  },

  createUser(req: Request, res: Response) {
    try {
      const user = userService.createUser(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (err: any) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  deleteUser(req: Request, res: Response) {
    try {
      const user = userService.deleteUser(req.params.id);
      res.status(200).json({ success: true, data: user });
    } catch (err: any) {
      res.status(404).json({ success: false, message: err.message });
    }
  }
};