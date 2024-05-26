import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

export default function WorkExperienceCard({
  data,
}: {
  data: WorkExperienceDataType;
}) {
  return (
    <Card className="w-full max-w-2xl rounded-lg shadow-md overflow-hidden hover:shadow-2xl dark:hover:shadow-slate-200 transition duration-500">
      <CardTitle className="text-xl p-2 hover:underline">
        Work Experience
      </CardTitle>
      <CardContent>
        <CardDescription>
          <div className="space-y-4">
            {data.company.map((each, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-[auto_1fr] items-center gap-4"
                >
                  <div className="bg-gray-100 rounded-full flex items-center justify-center aspect-square w-12 dark:bg-gray-800">
                    {each.companyLogo ? (
                      <img
                        src={each.companyLogo}
                        className="h-full w-full rounded-full"
                      />
                    ) : (
                      <BriefcaseIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium hover:underline">
                      {each.role}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {each.companyName}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {each.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function BriefcaseIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

export interface WorkExperienceDataType {
  company: {
    role: string;
    companyName: string;
    companyLogo: string;
    desc: string;
  }[];
}
