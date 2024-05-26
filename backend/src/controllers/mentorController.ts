import { Request, Response } from "express";
import { getAllMentors, getMentor } from "../model/mentor";
import { MentorDataType, UserDataType } from "../utiles/type";

export async function getMentorList(req: Request, res: Response) {
  // Check user authenticated
  try {
    const results = await getAllMentors()
    let mentors: MentorDataType[] | null = [];
    results.map((result) => {
      const mentor: MentorDataType = {
        id: result.id.toString(),
        name: result.name,
        desc: result.desc || "",
        imgSrc: result.img || "",
        currPost: result.currDesignation || "",
        industry: result.industry.map((industry) => industry.type),
        skills: result.skill.map((skill) => skill.type),
        currMentor: result.mentor.map((mentor) => mentor.company)
      }
      mentors.push(mentor)
    })
    return res.json({
      mentors,
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getMentorDetails(req: Request, res: Response) {
  // Check user authenticated
  try {
    const { mentorId } = req.params;
    const result = await getMentor(parseInt(mentorId))
    if (!result) {
      return res.status(404).json({
        msg: "Invalid mentor Id"
      })
    }
    const mentorData: UserDataType = {
      userId: mentorId,
      profileData: {
        name: result.name,
        profileImg: result.img || "",
        bgImg: result.bgImg || "",
        bio: result.bio || "",
        location: `${result.city}, ${result.country}`,
      },
      aboutData: {
        about: result.desc || ""
      },
      workExperienceData: {
        company: result.experience.map((experience) => {
          const company = {
            companyName: experience.companyName,
            companyLogo: experience.companyLogo || "",
            role: experience.role,
            desc: experience.desc,
            startYear: experience.startYear,
            endYear: experience.endYear
          }
          return company;
        })
      }
    }
    return res.json(mentorData)
  } catch (error) {
    return res.status(500).json({
      msg: "Internal Server Error"
    })
  }
}