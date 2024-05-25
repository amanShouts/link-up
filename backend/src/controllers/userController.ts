import { Request, Response } from "express";

const userModel = require('../model/user');

module.exports = {
  getUsers: async (req: Request, res: Response ) => {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
