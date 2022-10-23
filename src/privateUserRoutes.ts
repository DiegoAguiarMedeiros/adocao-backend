import { Router } from 'express';
import multer from 'multer';

import updateUserComplementController from './useCases/User/UpdateUserComplement';
import updateUserController from './useCases/User/UpdateUser';
import updateUserNumberAcessController from './useCases/User/UpdateUserNumberAcess';
import getUserController from './useCases/User/GetUser';
import getAllUsersController from './useCases/User/GetAllUsers';

import isAuthenticated from './middleware/IsAuthenticatedUser';

const router = Router();

router.put('/usersComplement', isAuthenticated.handle, updateUserComplementController.handle);
router.put('/users', isAuthenticated.handle, updateUserController.handle);
router.put('/users/clearAcess', isAuthenticated.handle, updateUserNumberAcessController.handle);
router.get('/users', isAuthenticated.handle, getUserController.handle);
router.get('/users/all', isAuthenticated.handle, getAllUsersController.handle);


export default router;
