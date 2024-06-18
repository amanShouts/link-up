import { Request, Response } from 'express';
import { prisma } from '.';

export const getAllUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw new Error('Error fetching users');
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
        type: 'ENTREPRENEUR',
      },
    });
  } catch (error) {
    throw new Error('Error occured while creating user');
  }
};

export const updateUserData = async (req: Request) => {
  try {
    const { type, username, isMentor, age, bio, city, country } = req.body;
    const user = await prisma.user.update({
      where: { username },
      data: { type, isMentor, age, bio, city, country },
    });
    return user;
  } catch (error) {
    console.error('Error updating user type:', error);
    throw error;
  }
};

export const updateUserSkills = async (req: Request, res: Response) => {
  const { type, userId } = req.body;

  try {
    const newSkill = await prisma.skill.create({
      data: {
        type,
        userId,
      },
    });

    return newSkill;
  } catch (error) {
    console.error('Error creating skill:', error);
  }
};

export const updateUserIndustries = async (req: Request, res: Response) => {
  const { type, userId } = req.body;

  try {
    const newSkill = await prisma.industry.create({
      data: {
        type,
        userId: {
          connect: { id: userId },
        },
      },
    });
  } catch (error) {
    console.error('Error creating skill:', error);
  }
};

export const getUser = async (id: string) => {
  const user_id = parseInt(id);
  try {
    return await prisma.user.findUnique({
      where: {
        id: user_id,
      },
    });
  } catch (error) {
    throw new Error('Error fetching user');
  }
};

export async function getUserDetailsByUsername(username: string) {
  const result = await prisma.user.findFirst({
    where: {
      username: username,
    },
    select: {
      id: true,
      name: true,
      username: true,
      currDesignation: true,
      img: true,
      bgImg: true,
      city: true,
      country: true,
      bio: true,
      desc: true,
      experience: {
        select: {
          role: true,
          companyName: true,
          companyLogo: true,
          desc: true,
          startYear: true,
          endYear: true,
        },
      },
    },
  });
  return result;
}

export const getUserIdModal = async (username: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};
