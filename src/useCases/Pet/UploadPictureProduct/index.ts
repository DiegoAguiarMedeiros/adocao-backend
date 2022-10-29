import S3ImageService from '../../../services/implementations/S3ImageService';
import MongoPetRepository from '../../../repositories/implementations/MongoPetRepository';
import UploadPicturePetUseCase from './UploadPicturePetUseCase';
import UploadPicturePetController from './UploadPicturePetController';

const mongoPetRepository = new MongoPetRepository();

const s3ImageService = new S3ImageService();

const uploadPicturePetUseCase = new UploadPicturePetUseCase(
  mongoPetRepository,
  s3ImageService
);

const uploadPicturePetController = new UploadPicturePetController(
  uploadPicturePetUseCase
);

export default uploadPicturePetController;
