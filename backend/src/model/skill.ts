import { Request, Response } from 'express';
import { prisma } from '.';

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
