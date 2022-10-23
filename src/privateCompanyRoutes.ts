import { Router } from 'express';
import multer from 'multer';

import updateCompanyController from './useCases/Company/UpdateCompany';

import isAuthenticated from './middleware/IsAuthenticatedCompany';

const router = Router();


// router.use(isAuthenticated.handle);

router.put('/company', isAuthenticated.handle, updateCompanyController.handle);


export default router;
