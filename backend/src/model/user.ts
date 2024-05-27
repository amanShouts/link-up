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
  id,
  userType,
  isMentor,
  age,
  bio,
  city,
  country,
}: UpdateUserDataParams) => {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: { type: userType, isMentor, age, bio, city, country },
    });
    console.log("Updated User Data", user);
    return user;
  } catch (error) {
    console.error("Error updating user type:", error);
    throw error;
  }
};

updateUserData({
  id: 1, // Replace with the ID of the user you want to update
  userType: "ENTREPRENEUR", // Replace with the new user type
  isMentor: false, // Replace with true or false depending on whether the user is a mentor
  age: 30, // Replace with the new age
  bio: "Updated bio", // Replace with the new bio
  city: "New York", // Replace with the new city
  country: "USA", // Replace with the new country
})
  .then((updatedUser) => {
    console.log("User data updated successfully:", updatedUser);
  })
  .catch((error) => {
    console.error("Error updating user data:", error);
  });
