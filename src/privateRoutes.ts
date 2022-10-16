import { Router } from 'express';
import multer from 'multer';

import updateUserComplementController from './useCases/User/UpdateUserComplement';
import updateUserController from './useCases/User/UpdateUser';
import updateUserNumberAcessController from './useCases/User/UpdateUserNumberAcess';
import getUserController from './useCases/User/GetUser';
import getAllUsersController from './useCases/User/GetAllUsers';

// import isPaid from './middleware/IsPaid';

const router = Router();


// router.use(isPaid.handle);

router.put('/usersComplement', updateUserComplementController.handle);
router.put('/users', updateUserController.handle);
router.put('/users/clearAcess', updateUserNumberAcessController.handle);
router.get('/users', getUserController.handle);
router.get('/users/all', getAllUsersController.handle);


export default router;
