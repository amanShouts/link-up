import { PrismaClient } from "@prisma/client";
import { Request } from "express";

const prisma = new PrismaClient();

export const getAllUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw new Error('Error fetching users');
  }
}

export const saveUserModel = async (req: Request) => {
  const { username, name, age, img, lastLogin, industryField } = req.body;
  try {
    return await prisma.user.create({
      data: {
        username,
        name,
        age,
        img,
        lastLogin,
        type: "ENTREPRENEUR" // fix this
      }
    })
  }
  catch (error) {
    throw new Error('Error occured while creating user');
  }
}