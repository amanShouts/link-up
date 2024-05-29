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
    type : 'ARTICLE',
    content : 'this is an article',
    title : 'The funding winter'
  },
  {
    type : 'BOOK',
    content : 'this is an book idiot',
    title : 'The subtle art of not giving a fuck'
  },
  {
    type : 'ARTICLE',
    content : 'this is an article 2',
    title : 'the choppy and flippant job market of 2024 '
  },
  {
    type : 'VIDEO',
    content : 'this is an video',
    title : 'Getting into the startup world - a webinar'
  },
  {
    type : 'PODCAST',
    content : 'this is an podcast man',
    title : 'a top down view of fund raising'
  },
]
export function Resources() {
  return (
    <div className="">
      <div className="min-w-screen">
        <div className="flex justify-center items-start">
          {/* left - Resource Box */}
          <div className="w-2/3 bg-slate-200 flex flex-col justify-start">
            <Card className="bg-slate-400">
              <CardHeader>
                <CardTitle>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>

          {/* Right - Add Resource Box */}
          <div className="w-1/3 bg-slate-700">post</div>
        </div>
      </div>
    </div>
  );
}
