import Navbar from '@/components/Navbar/Navbar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// resources type
// ARTICLE
// VIDEO
// PODCAST
// BOOK

const resourceList = [
  {
    type: 'ARTICLE',
    content: 'this is an article',
    title: 'The funding winter',
    author: 'Ajay',
  },
  {
    type: 'BOOK',
    content: 'this is an book idiot',
    title: 'The subtle art of not giving a fuck',
    author: 'Poonam',
  },
  {
    type: 'ARTICLE',
    content: 'this is an article 2',
    title: 'the choppy and flippant job market of 2024 ',
    author: 'Rahul',
  },
  {
    type: 'VIDEO',
    content: 'this is an video',
    title: 'Getting into the startup world - a webinar',
    author: 'Aman',
  },
  {
    type: 'PODCAST',
    content: 'this is an podcast man',
    title: 'a top down view of fund raising',
    author: 'Dan',
  },
];

export function Resources() {
  return (
    <div className="">
      <div className="min-w-screen">
        <div className="flex justify-center items-start">
          {/* left - Resource Box */}
          <div className="w-2/3 bg-yellow-400 px-2 py-2">
            <p className="text-xl font-semibold">Resources</p>
            <div className="flex flex-col gap-2 ">
              {resourceList.length > 0 &&
                resourceList.map((resource) => (
                  <Card className={`${resource.author == 'Aman' ? ' self-end' : ' self-start'} w-[85%] h-[150px]`}>
                    <CardHeader className="flex flex-row justify-start items-center gap-3 p-0">
                      <CardTitle className="">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>{resource.author}</AvatarFallback>
                        </Avatar>
                      </CardTitle>
                      <CardDescription className='mt-8 pt-0'>{resource.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{resource.title}</p>
                    </CardContent>
                    <CardFooter>
                      <p>{resource.content}</p>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>

          {/* Right - Add Resource Box */}
          <div className="w-1/3 bg-slate-700">post</div>
        </div>
      </div>
    </div>
  );
}
