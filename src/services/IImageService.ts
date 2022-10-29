export interface IImageService {
  saveImage(imageBuffer: Buffer, imageType: string, petId: string): Promise<string>;
  deleteImage(fileName: string): Promise<string>;
}
