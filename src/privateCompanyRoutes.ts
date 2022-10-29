import { Router } from 'express';
import multer from 'multer';

import updateCompanyController from './useCases/Company/UpdateCompany';
import createPetController from './useCases/Pet/CreatePet';
import GetAllPet from './useCases/Pet/GetAllPet';
import GetOnePet from './useCases/Pet/GetOnePet';
import uploadPictureProdutController from './useCases/Pet/UploadPictureProduct';

import isAuthenticated from './middleware/IsAuthenticatedCompany';
import isAuthenticatedUser from './middleware/IsAuthenticatedUser';

const router = Router();


// router.use(isAuthenticated.handle);

router.put('/company', isAuthenticated.handle, updateCompanyController.handle);
router.post('/company/pet', isAuthenticated.handle, createPetController.handle);
router.post('/company/pet/img', isAuthenticated.handle, multer().single('file'), uploadPictureProdutController.handle);
router.post('/company/pet/getAll', isAuthenticatedUser.handle, GetAllPet.handle);
router.post('/company/pet/getOnePet', isAuthenticatedUser.handle, GetOnePet.handle);


export default router;
