import { v2 as cloudinary } from 'cloudinary';

export async function imageUploader({
  fileStr,
  user_id,
  resource_type,
}: {
  fileStr: string;
  user_id: string;
  resource_type: 'image' | 'video' | 'raw' | 'auto' | undefined;
}) {
  console.log('uploading');
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(fileStr, {
      public_id: 'posts' + user_id,
      resource_type: resource_type,
    })
    .catch((error) => {
      console.log(error);
    });

  return uploadResult?.url;
}
