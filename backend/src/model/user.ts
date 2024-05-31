import { PrismaClient, UserType } from "@prisma/client";
import { Request, RequestHandler } from "express";
import { UpdateUserDataParams } from "../utiles/type";

const prisma = new PrismaClient();

export const getAllUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

export const saveUserModel = async (req: Request) => {
  const { username, name, age, img, lastLogin, type } = req.body;
  try {
    return await prisma.user.create({
      data: {
        username,
        name,
        img,
        lastLogin,
        type: "ENTREPRENEUR",
      },
    });
  } catch (error) {
    throw new Error("Error occured while creating user");
  }
};

export const updateUserData = async (req: Request) => {
  try {
    const { userType, username, isMentor, age, bio, city, country } = req.body;

    console.log('req.body: ',req.body)
    const user = await prisma.user.update({
      where: { username },
      data: { type: userType, isMentor, age, bio, city, country },
    });
    console.log("Updated User Data", user);
    return user;
  } catch (error) {
    console.error("Error updating user type:", error);
    throw error;
  }
};

export const getUser = async (id : string) => {
  const user_id = parseInt(id);
  try {
    return await prisma.user.findUnique({
      where: {
        id : user_id,
      },
    });
  } catch (error) {
    throw new Error("Error fetching user");
  }
};