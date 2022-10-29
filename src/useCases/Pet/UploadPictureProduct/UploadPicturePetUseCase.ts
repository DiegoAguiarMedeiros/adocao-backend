import { IPetRepository } from '../../../repositories/IPetRepository';
import { IImageService } from '../../../services/IImageService';

import Pet from '../../../entities/Pet';

export default class UploadPicturePetUseCase {
  constructor(
    private petsRepository: IPetRepository,
    private imageService: IImageService
  ) { }

  execute = async (
    petId: string,
    fileBufferAndMimeType: { buffer: Buffer; mimetype: string },
  ) => {

    const oldPet: Pet = await this.petsRepository.findById(
      petId
    );

    if (!oldPet) {
      throw new Error('UploadPicturePetUseCase: pet ID is invalid.');
    }


    const updatedPet = new Pet({
      ...oldPet,
    });

    if (fileBufferAndMimeType) {
      if (updatedPet.imgs && updatedPet.imgs.length + 1 > 5) {
        throw new Error('UploadPicturePetUseCase: max file limit reached');
      }
      const imagesURL = await this.imageService.saveImage(
        fileBufferAndMimeType.buffer,
        fileBufferAndMimeType.mimetype,
        petId
      );

      if (!updatedPet.imgs) {
        updatedPet.imgs = [String(imagesURL)];
      } else {
        updatedPet.imgs.push(String(imagesURL));
      }
    }
    await this.petsRepository.update(petId, { ...updatedPet });
  };
}
