import MentorListCard, { MentorDataType } from "@/components/MentorListCard";
import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MentorList() {
  const [mentors, setMentors] = useState<MentorDataType[] | null>(null);
  useEffect(() => {
    async function getAllMentor() {
      const response = await axios.get(`${BACKEND_URL}/api/mentor/all`);
      const data = await response.data;
      setMentors(data.mentors);
    }
    getAllMentor();
  }, []);
  return (
    <section
      id="mentorList"
      className="w-full flex flex-col items-center justify-center"
    >
      <div className="text-3xl m-3">Connect to mentors</div>
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mentors?.map((mentor) => {
            return (
              <div
                key={mentor.id}
                className="flex justify-center items-center m-2 col-span-1"
              >
                <MentorListCard data={mentor} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
