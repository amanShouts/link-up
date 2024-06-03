import React, { useRef } from 'react';
import { VideoIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import toast from 'react-hot-toast';

export const VideoUpload = ({
  setSelectedVideo,
  selectedImage,
  setSelectedImage,
  setShowLink,
  showLink,
}: {
  setSelectedVideo: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
  selectedImage: string | null;
  setShowLink: React.Dispatch<React.SetStateAction<boolean>>;
  showLink: boolean;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedImage) {
      setSelectedImage(null);
    }
    if (showLink) {
      setShowLink(false);
    }

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      if (file.size > 20 * 1024 * 1024) {
        toast.error('File size exceeds limit of 0 MB');
        setSelectedVideo(null);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedVideo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Button
        variant={'link'}
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        <VideoIcon className={'w-5 h-5 cursor-pointer dark:text-gray-50'} />
      </Button>
      <input
        ref={inputRef}
        type="file"
        id="video-input"
        accept="video/*"
        className={'hidden'}
        onChange={handleVideoChange}
      />
    </div>
  );
};
