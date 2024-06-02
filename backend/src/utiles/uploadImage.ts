import { v2 as cloudinary } from 'cloudinary';

export async function imageUploader({
  fileStr,
  user_id,
}: {
  fileStr: string;
  user_id: string;
}) {
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
    })
    .catch((error) => {
      console.log(error);
    });

  return uploadResult?.url;
}
