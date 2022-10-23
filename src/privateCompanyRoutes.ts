import { Router } from 'express';
import multer from 'multer';

import updateCompanyController from './useCases/Company/UpdateCompany';
import createPetController from './useCases/Pet/CreatePet';

import isAuthenticated from './middleware/IsAuthenticatedCompany';

const router = Router();


// router.use(isAuthenticated.handle);

router.put('/company', isAuthenticated.handle, updateCompanyController.handle);
router.post('/company/pet', isAuthenticated.handle, createPetController.handle);


export default router;
