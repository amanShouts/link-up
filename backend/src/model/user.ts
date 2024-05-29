import { PrismaClient, UserType } from "@prisma/client";
import { Request } from "express";
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

export const updateUserData = async ({
  userType,
  username,
  isMentor,
  age,
  bio,
  city,
  country,
}: UpdateUserDataParams) => {
  try {
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
