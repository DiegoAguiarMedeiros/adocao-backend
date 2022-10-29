import { Response } from 'express';
import UploadPicturePetUseCase from './UploadPicturePetUseCase';

export default class UploadPicturePetController {
  constructor(
    private uploadPicturePetUseCase: UploadPicturePetUseCase
  ) { }

  handle = async (req: any, res: Response): Promise<Response> => {
    const { file,  query } = req;

    const { petId } = query;

    const fileBufferAndMimeType = file
      ? {
        buffer: file.buffer,
        mimetype: file.mimetype,
      }
      : null;


    try {
      await this.uploadPicturePetUseCase.execute(
        petId,
        fileBufferAndMimeType
      );
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
