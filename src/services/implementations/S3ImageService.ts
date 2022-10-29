import crypto from "crypto";
import * as fs from 'fs';
import { IImageService } from "../IImageService";

import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'dqxt4kisi',
  api_key: '185631269744387',
  api_secret: 'QR5LFPYfbbbqKKVWFfS4cr_EETg'
});


const uploadPicture = (content: Buffer): Promise<object> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder: 'profile_pictures',
        eager: [{ width: 400, height: 400, crop: 'crop', gravity: 'face' }]
      }, (error, result) => {
        if (error) {
          throw new Error('Upload failed')
        } else {
          resolve(result)
        }
      }
    ).end(content)
  })
}

const uploadProfilePicture = async (img: any): Promise<any> => {
  const binaryData = img
  const result = await uploadPicture(binaryData) // Watch below for details
  return result
}

// const uploadProfilePicture = async (req, res) => Promise < string > {
//   const binaryData = req.file.buffer
//   const result = await uploadPicture(binaryData) // Watch below for details
//   return result.url
// }
export default class S3ImageService implements IImageService {
  async saveImage(imageBuffer: Buffer, fileMimetype: string, petId: string): Promise<string> {

    const urlCloudinary = await uploadProfilePicture(imageBuffer);

    console.log('urlCloudinary', urlCloudinary)

    return urlCloudinary.url;
  }

  async deleteImage(fileName: string): Promise<any> {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: fileName,
    };


  }
}
