import AboutCard, { AboutDataType } from "@/components/AboutCard";
import MentorProfileCard, {
  ProfileDataType,
} from "@/components/MentorProfileCard";
import WorkExperienceCard, {
  WorkExperienceDataType,
} from "@/components/WorkExperienceCard";
import { useParams } from "react-router-dom";

export default function MentorProfile() {
  const { mentorId } = useParams();
  // Find mentor data
  console.log(mentorId);
  if (!mentorId) return;
  const data: UserDataType = { ...dummyData, mentorId: mentorId };
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-2">
      <MentorProfileCard data={data.profileData} />
      <AboutCard data={data.aboutData} />
      <WorkExperienceCard data={data.workExperienceData} />
    </div>
  );
}

const dummyData = {
  profileData: {
    bgImg:
      "https://hotpot.ai/images/site/ai/image_generator/background_maker/teaser_400.jpg",
    profileImg: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    name: "John Doe",
    desc: "Alumni of XYZ University | Major in ABC",
    location: "City, Country",
  },
  aboutData: {
    about: `I am currently working as a Software Development Engineer 2 at Amazon
    in the Central Machine Learning Org. I help build exciting products
    like LLM-powered search bots and F&V grading systems that utilize
    Computer Vision to remove bad produce from the shelf before it reaches
    the customers. Graduated in B.Tech (Computer Science) at Delhi
    Technological University. Proficient in C/C++, Java, Python, Design. I
    have good in-depth knowledge of important concepts like Data
    Structures, Algorithms, OOPS, OS, and DBMS. Experienced in full stack
    development, and an enthusiast in Machine Learning and Neural
    Networks.`,
  },
  workExperienceData: {
    company: [
      {
        role: "Software Engineer",
        companyName: "Acme Inc. • 2019 - Present",
        companyLogo: "https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png",
        desc: `Developed and maintained web applications using React,
        Node.js, and MongoDB. Collaborated with cross-functional
        teams to deliver high-quality software.`,
      },
      {
        role: "Front-end Developer",
        companyName: "Widgets Inc. • 2016 - 2019",
        companyLogo: "https://logowik.com/content/uploads/images/amazon6707.jpg",
        desc: `Designed and implemented responsive user interfaces using
        HTML, CSS, and JavaScript. Collaborated with designers and
        back-end developers to deliver high-quality web applications.`,
      },
    ],
  },
};

interface UserDataType {
  mentorId: string;
  profileData: ProfileDataType;
  aboutData: AboutDataType;
  workExperienceData: WorkExperienceDataType;
}
