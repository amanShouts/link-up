import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { BACKEND_URL } from '@/config';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { User } from '@/store/slice/userSlice';
import { Textarea } from '@/components/ui/textarea';

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

const resourceCategory = ['Technology', 'Marketing', 'Manufacturing', 'Legal'];

const resourceType = ['ARTICLE', 'VIDEO', 'FILE', 'IMAGE'];

export function Resources() {
  const [selectedResourcetype, setSelectedResourceType] = useState(null);
  const [openResourceSelect, setOpenResourceSelect] = useState(false);
  const [openTypeSelect, setOpenCategorySelect] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [file, setFile] = useState<string | null>(null);
  const [resourcelist, setResourcelist] = useState([]);
  const [content, setContent] = useState('');

  console.log(selectedResourcetype, selectedType, file);
  const currentUser = useSelector(
    (state: { users: { currentUser: User } }) => state.users.currentUser,
  );
  console.log('current user in reosurces', currentUser);
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleResourceAdd = async () => {
    // call api to backend to create a new resource
    const resourceObj = {
      type: selectedType,
      content: content,
      title: title,
      userId: currentUser.id,
      link: file ? file : null,
    };
    const res = await axios.post(`${BACKEND_URL}/resource/add`, resourceObj);
    const data = res.data;

    console.log(data, res);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result;
        console.log(dataUrl, ' data url');
        // Use the dataUrl, e.g., set it as the src of an image element
        setFile(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  useEffect(() => {
    async function getAllResources() {
      const res = await axios.get(`${BACKEND_URL}/resource/list`);
      console.log(res.data, ' res in list data resource');
      if (res.data.message == 'success') {
        setResourcelist((prev) => res.data.data);
      }
    }

    getAllResources();
  }, []);

  console.log(
    file,
    ' file',
    selectedResourcetype,
    'type',
    selectedType,
    ' type',
    content,
    ' content',
  );
  return (
    <div className="bg-slate-50 min-h-screen ">
      <div className="min-w-screen">
        <div className="flex justify-center items-start">
          {/* left - Resource Box */}
          <div className="w-full px-2 py-2">
            {/* <p className="text-xl font-semibold">Resources</p> */}
            <div className="flex justify-center items-start gap-4">
              <div className="w-1/4">
                <div>
                  <p>Suggested Resources</p>
                  <div className="w-full rounded bg-slate-400">r</div>
                </div>
              </div>
              <div className="w-2/4 border-l-[1px] border-r-[1px] border-b-0 border-slate-300 shadow-md">
                <div className="mx-auto mr-4 flex flex-col gap-2 mt-4 px-4 py-4 rounded-lg w-full">
                  {resourcelist.length > 0 &&
                    resourcelist.map((resource) => (
                      <Card
                        className={`${
                          resource.author == currentUser.id
                            ? 'self-end items-end'
                            : 'self-start items-start'
                        } w-[85%] h-fit flex flex-col px-2 py-2 gap-1`}
                      >
                        <CardHeader className="flex flex-row justify-start !items-start gap-1 p-0">
                          <CardTitle className="w-full">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>{resource.author}</AvatarFallback>
                            </Avatar>
                          </CardTitle>
                          <CardDescription
                            className={`${
                              resource.author == currentUser.id
                                ? 'text-right'
                                : 'text-left'
                            } pt-0`}
                          >
                            {resource.author}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="w-full p-0">
                          <p>{resource.title}</p>
                        </CardContent>
                        <CardFooter className="w-full p-0">
                          <p>{resource.content}</p>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </div>

              {/* rightmost - Add Resource Box */}
              <div className="w-1/4 bg-slate-200">
                <div className="w-full border-[1px] px-2 py-2 flex flex-col justify-start items-center gap-4">
                  <div className="w-full">
                    <Button className="w-full" onClick={handleDrawerOpen}>
                      {' '}
                      + Add Resource
                    </Button>
                  </div>
                  <div className="w-full">
                    <label className="text-sm">Search</label>
                    <Input type="email" placeholder="Email" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Sheet
            open={openDrawer}
            onOpenChange={(value) => {
              console.log(value);
              setOpenDrawer(value);
            }}
          >
            {/* <SheetTrigger>Open</SheetTrigger> */}
            <SheetContent className="!z-[100]">
              <SheetHeader>
                <SheetTitle className="font-semibold text-lg">
                  Add a Resource
                </SheetTitle>
                <SheetDescription className="px-0 pt-2">
                  <div className="rounded px-2 py-8 border-[1px] flex flex-col justify-start items-start gap-6">
                    <div>
                      <label className="font-semibold text-xs">Title *</label>
                      <Input
                        type="email"
                        id="email_input"
                        placeholder="Add Title"
                      />
                    </div>

                    <div className="w-full">
                      <label htmlFor="resource_select">Category *</label>
                      <Select
                        onValueChange={(value) =>
                          setSelectedResourceType(value)
                        }
                        open={openResourceSelect}
                        defaultOpen={true}
                        onOpenChange={(value) => setOpenResourceSelect(value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Resource Category" />
                        </SelectTrigger>
                        <SelectContent className="z-[200]">
                          {resourceCategory.map((elem, index) => (
                            <SelectItem key={index} value={elem.toString()}>
                              {elem}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="w-full">
                      <label>Type *</label>
                      <Select
                        onValueChange={(value) => setSelectedType(value)}
                        open={openTypeSelect}
                        defaultOpen={true}
                        onOpenChange={(value) => setOpenCategorySelect(value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Resource Type" />
                        </SelectTrigger>
                        <SelectContent className="z-[200]">
                          {resourceType.map((elem, index) => (
                            <SelectItem key={index} value={elem.toString()}>
                              {elem}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="w-full">
                      <label>Content</label>
                      <Textarea
                        placeholder="Resource content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                    </div>

                    <div className="w-full">
                      <input
                        type="file"
                        className="w-full text-center"
                        onChange={handleFileUpload}
                        disabled={selectedType != 'IMAGE'}
                      />
                    </div>

                    <div className="flex justify-end items-center gap-2 w-full">
                      <Button onClick={handleDrawerClose} className="w-24">
                        Cancel
                      </Button>
                      <Button onClick={handleResourceAdd} className="w-24">
                        Add
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
