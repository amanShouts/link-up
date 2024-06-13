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
    <div className="direct-messages-container grid grid-cols-[300px_1fr] min-h-[95vh] w-full bg-white dark:bg-gray-950 rounded-xl overflow-hidden">
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
      <div className="flex flex-col relative">
        <div className="user-profile-link border-b border-gray-200 dark:border-gray-800 px-6 py-4">
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
        <div className="messages-container flex-1 overflow-y-auto px-6 py-4 space-y-4">
          
        </div>
        <div className="message-box-and-send-btn-container border-t border-gray-200 dark:border-gray-800 px-6 w-[100%] absolute bottom-5">
          <div className="relative flex item-center gap-4">
            <Input type="text" placeholder="Type your message" className='w-[100%] box-content p-3' />
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
