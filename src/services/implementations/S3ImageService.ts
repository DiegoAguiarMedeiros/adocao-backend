import crypto from "crypto";
import * as fs from 'fs';
import { IImageService } from "../IImageService";

export default class S3ImageService implements IImageService {
  async saveImage(imageBuffer: Buffer, fileMimetype: string, petId: string): Promise<string> {
    const imageType = fileMimetype.split("/")[1];
    const imageName = `${crypto.randomBytes(16).toString("hex")}.${imageType}`;
    const path = `./uploads/${petId}`;

    fs.mkdirSync(path, { recursive: true })

    const fullPath = `${path}/${imageName}`

    fs.writeFile(fullPath, imageBuffer, "binary", (err) => {
      if (err)  throw new Error('UploadPicturePetUseCase: not saved');;
    });

    const finalPath = fullPath.substring(1)

    return finalPath;
  }

  async deleteImage(fileName: string): Promise<any> {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: fileName,
    };


  }
}
