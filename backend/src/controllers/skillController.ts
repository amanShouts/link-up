import { Request, Response } from "express";
import { updateUserSkills } from "../model/skill";

export const updateUserSkillsController = async (req: Request, res: Response) => { 
  try {
    const updatetedSkills = await updateUserSkills(req,res);
    res.status(200).json({
      message: "skills updated successfully",
      updatetedSkills: updatetedSkills,
    });
  } catch (error) {
    console.error("Error during updating skills:", error);
    res.status(500).json({
      error: "Internal server error",
      response: error,
    });
  }
}