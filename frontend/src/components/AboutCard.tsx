import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

export default function AboutCard({ data }: { data: AboutDataType }) {
  return (
    <Card className="w-full max-w-2xl rounded-lg shadow-md  overflow-hidden hover:shadow-2xl dark:hover:shadow-slate-200 transition duration-500">
      <CardTitle className="text-xl p-2 hover:underline">About</CardTitle>
      <CardContent>
        <CardDescription>{data.about}</CardDescription>
      </CardContent>
    </Card>
  );
}

export interface AboutDataType {
  about: string;
}
