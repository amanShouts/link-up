import { Button } from '@/components/ui/button.tsx';
import { Link2Icon } from 'lucide-react';
import React from 'react';

export function AttachingLink({
  setShowLink,
  setSelectedImage,
  setSelectedVideo,
  selectedVideo,
  selectedImage,
}: {
  setShowLink: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedVideo: React.Dispatch<React.SetStateAction<string | null>>;
  selectedVideo: string | null;
  selectedImage: string | null;
}) {
  return (
    <Button
      variant={'link'}
      onClick={() => {
        if (selectedImage) {
          setSelectedImage(null);
        }
        if (selectedVideo) {
          setSelectedVideo(null);
        }
        setShowLink(true);
      }}
    >
      <Link2Icon className={' h-6 w-6'} />
    </Button>
  );
}
