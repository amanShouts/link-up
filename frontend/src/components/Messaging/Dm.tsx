import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

export default function Dm() {
  useEffect(() => {
    const socket = io('http://localhost:3000',{
      transports: ['websocket']
    });

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('connect_error', (error) => {
      console.error('Connection failed:', error);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="grid grid-cols-[300px_1fr] h-[80vh] max-h-[800px] w-full bg-white dark:bg-gray-950 rounded-xl overflow-hidden">
      <div className="border-r border-gray-200 dark:border-gray-800 overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-950 z-10 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
          <Input placeholder="Search conversations" className="bg-gray-100 dark:bg-gray-800 dark:text-gray-50" />
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          <Link
            to="#"
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Avatar>
              <img src="/placeholder.svg" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 truncate">
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                Hey, did you see the new design updates?
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">2:34 PM</div>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Avatar>
              <img src="/placeholder.svg" alt="Jane Smith" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="flex-1 truncate">
              <div className="font-medium">Jane Smith</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                Sounds good, let's discuss it in our meeting.
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Yesterday</div>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Avatar>
              <img src="/placeholder.svg" alt="Bob Johnson" />
              <AvatarFallback>BJ</AvatarFallback>
            </Avatar>
            <div className="flex-1 truncate">
              <div className="font-medium">Bob Johnson</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                I'll get that report to you by the end of the day.
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Last week</div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="border-b border-gray-200 dark:border-gray-800 px-6 py-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <img src="/placeholder.svg" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Online</div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          <div className="flex items-start gap-4">
            <Avatar>
              <img src="/placeholder.svg" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[75%]">
              <div className="font-medium">John Doe</div>
              <div className="text-sm">Hey, did you see the new design updates?</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">2:34 PM</div>
            </div>
          </div>
          <div className="flex items-start gap-4 justify-end">
            <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[75%]">
              <div className="font-medium">You</div>
              <div className="text-sm">Yeah, I like the new look. It's a big improvement.</div>
              <div className="text-xs text-gray-300 mt-1">2:35 PM</div>
            </div>
            <Avatar>
              <img src="/placeholder.svg" alt="You" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-4">
            <Avatar>
              <img src="/placeholder.svg" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[75%]">
              <div className="font-medium">John Doe</div>
              <div className="text-sm">Great, I'll share the updates with the team.</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">2:36 PM</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 px-6 py-4">
          <div className="relative">
            <Textarea
              placeholder="Type your message..."
              className="w-full bg-gray-100 dark:bg-gray-800 dark:text-gray-50 rounded-lg pr-16 resize-none"
              rows={1}
            />
            <Button type="submit" size="icon" className="absolute top-1/2 right-3 -translate-y-1/2">
              <SendIcon className="w-5 h-5" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
