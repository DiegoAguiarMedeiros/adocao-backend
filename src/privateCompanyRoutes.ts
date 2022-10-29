import { Router } from 'express';
import multer from 'multer';

import updateCompanyController from './useCases/Company/UpdateCompany';
import createPetController from './useCases/Pet/CreatePet';
import uploadPictureProdutController from './useCases/Pet/UploadPictureProduct';

import isAuthenticated from './middleware/IsAuthenticatedCompany';

const router = Router();


// router.use(isAuthenticated.handle);

router.put('/company', isAuthenticated.handle, updateCompanyController.handle);
router.post('/company/pet', isAuthenticated.handle, createPetController.handle);
router.post('/company/pet/img', isAuthenticated.handle, multer().single('file'), uploadPictureProdutController.handle);


export default router;
