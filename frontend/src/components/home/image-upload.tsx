import React, { useRef } from 'react';
import { ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import toast from 'react-hot-toast';

export const ImageUpload = ({
  setSelectedImage,
}: {
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size exceeds limit of 5 MB');
        setSelectedImage(null);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Button variant={'link'} onClick={() => inputRef.current?.click()}>
        <ImageIcon className={'w-5 h-5 cursor-pointer dark:text-gray-50'} />
      </Button>
      <input
        ref={inputRef}
        type="file"
        id="file-input"
        accept="image/*"
        className={'hidden'}
        onChange={handleImageChange}
      />
    </div>
  );
};
