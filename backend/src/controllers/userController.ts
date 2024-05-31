import { Request, Response, response } from "express";
import { getAllUsers, saveUserModel, updateUserData } from "../model/user";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const saveUserController = async (req: Request, res: Response) => {
  try {
    const newUser = await saveUserModel(req);
    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
      response: error,
    });
  }
};

export const userOnboarding = async (req: Request, res: Response) => {
  console.log("got here")
  try {
    const updatedUser = await updateUserData(req);
    res.status(200).json({
      message: "User updated successfully",
      updatedUser: updatedUser,
    });
  } catch (error) {
    console.error("Error during user onboarding:", error);

    // Send error response
    res.status(500).json({
      error: "Internal server error",
      response: error,
    });
  }
};
