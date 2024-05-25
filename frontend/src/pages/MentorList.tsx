import MentorListCard from "@/components/MentorListCard";

export default function MentorListPage() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className="text-3xl m-3">Connect to mentors</div>
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5].map((val, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center m-2 col-span-1"
              >
                <MentorListCard id={val.toString()} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
