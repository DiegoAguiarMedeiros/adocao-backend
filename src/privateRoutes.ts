// import { Router } from 'express';
// import multer from 'multer';

// import createProductController from './useCases/Product/CreateProduct';
// import getAllProductController from './useCases/Product/GetAllProduct';
// import getOneProductController from './useCases/Product/GetOneProduct';
// import deletePictureProdutController from './useCases/Product/DeletePictureProduct';
// import uploadPictureProdutController from './useCases/Product/UploadPictureProduct';

// import updateProductController from './useCases/Product/UpdateProduct';
// import setHighlightSubcategoryProductController from './useCases/Product/SetHighlightSubcategoryProduct';

// import setProductComplementGroupActiveController from './useCases/Product/SetProductComplementGroupActive';
// import setProductComplementActiveController from './useCases/Product/SetProductComplementActive';

// import updateProductDragInDrogController from './useCases/Product/UpdateProductDragInDrop';

// import createCategoryController from './useCases/Category/CreateCategory';
// import getAllCategoriesController from './useCases/Category/GetAllCategories';
// import updateCategoryController from './useCases/Category/UpdateCategory';
// import updateCategoryDragInDropController from './useCases/Category/UpdateCategoryDragInDrop';

// import createSubcategoryController from './useCases/Subcategory/CreateSubcategory';
// import getAllSubcategoryController from './useCases/Subcategory/GetAllSubcategory';
// import getAllSubcategoryFromUserController from './useCases/Subcategory/GetAllSubcategoryFromUser';
// import getOneSubcategoryController from './useCases/Subcategory/GetOneSubcategory';
// import updateSubcategoryController from './useCases/Subcategory/UpdateSubcategory';
// import updateSubCategoryDragInDrogController from './useCases/Subcategory/UpdateSubCategoryDragInDrop';
// import getProductsBySubcategoryController from './useCases/Subcategory/GetProductsBySubcategory';

// import updateUserController from './useCases/User/UpdateUser';
// import updateUserNumberAcessController from './useCases/User/UpdateUserNumberAcess';
// import getUserController from './useCases/User/GetUser';
// import getAllUsersController from './useCases/User/GetAllUsers';

// import getUserPaymentMethodsController from './useCases/User/GetUserMethodPayment';
// import updateUserPaymentMethodsController from './useCases/User/UpdateUserPaymentMethods';

// import savaCardController from './useCases/payment/SaveCard';
// import getUserCardController from './useCases/payment/GetUserCard';

// import createSubscriptionController from './useCases/payment/CreateSubscription';
// import getSubscriptionController from './useCases/payment/GetSubscription';
// import cancelSubscriptionController from './useCases/payment/CancelSubscription';

// import GetOfficeHours from './useCases/OfficeHours/GetOfficeHours';
// import UpdateOfficeHours from './useCases/OfficeHours/UpdateOfficeHours';

// import createCityController from './useCases/City/CreateCity';
// import getAllCitiesController from './useCases/City/GetAllCities';
// import updateCityController from './useCases/City/UpdateCity';

// import createNeighborhoodController from './useCases/Neighborhood/CreateNeighborhood';
// import getAllNeighborhoodsController from './useCases/Neighborhood/GetAllNeighborhood';
// import updateNeighborhoodController from './useCases/Neighborhood/UpdateNeighborhood';

// import createComplementGroupController from './useCases/ComplementGroup/CreateComplementGroup';
// import getAllComplementGroupController from './useCases/ComplementGroup/GetAllComplementGroup';
// import updateComplementGroupController from './useCases/ComplementGroup/UpdateComplementGroup';

// import createComplementController from './useCases/Complement/CreateComplement';
// import getAllComplementsController from './useCases/Complement/GetAllComplements';
// import getAllComplementsByComplementGroupController from './useCases/Complement/GetAllComplementsByComplementGroup';
// import updateComplementController from './useCases/Complement/UpdateComplement';

// import getDeliverySettingsController from './useCases/DeliverySettings/GetDeliverySettings';
// import updateDeliverySettingsController from './useCases/DeliverySettings/UpdateDeliverySettings';

// import getMandatoryDataOfDeliveryController from './useCases/MandatoryData/GetMandatoryDataOfDelivery';
// import updateMandatoryDataOfDeliveryController from './useCases/MandatoryData/UpdateMandatoryDataOfDelivery';

// import getOperationsController from './useCases/GetOperations';
// import updateServiceModeController from './useCases/UpdateServiceMode';

// import gerOrdersUserController from './useCases/Orders/GetOrdersUser';

// import createCouponController from './useCases/Coupon/CreateCoupon';
// import getAllCouponFromUserController from './useCases/Coupon/GetAllCouponFromUser';
// import updateCouponController from './useCases/Coupon/UpdateCoupon';

// import updateSubscriptionController from './useCases/payment/UpdateSubscription';

// import isAuthenticated from './middleware/IsAuthenticated';

// import deleteUserController from './useCases/User/DeleteUser';
// // import isPaid from './middleware/IsPaid';

// const router = Router();

// router.use(isAuthenticated.handle);

// router.post('/payment/subscriptions', createSubscriptionController.handle);
// router.get('/payment/subscriptions', getSubscriptionController.handle);
// router.delete('/payment/subscriptions', cancelSubscriptionController.handle);
// router.put('/payment/subscriptions', updateSubscriptionController.handle);
// router.post('/payment/cards', savaCardController.handle);
// router.get('/payment/cards', getUserCardController.handle);

// // router.use(isPaid.handle);

// router.post(
//   '/products',
//   multer().array('file', 5),
//   createProductController.handle
// );

// router.get('/products', getAllProductController.handle);
// router.get('/products/:id', getOneProductController.handle);

// router.put(
//   '/products/:id',
//   multer().array('file', 5),
//   updateProductController.handle
// );

// router.put(
//   '/products/:id/highlightSubcategory',
//   setHighlightSubcategoryProductController.handle
// );

// router.put(
//   '/products/:id/complementgroup/:idcomplementgroup',
//   setProductComplementGroupActiveController.handle
// );

// router.put(
//   '/products/:id/complementgroup/:idcomplementgroup/complement/:idcomplement',
//   setProductComplementActiveController.handle
// );

// router.put('/orderProduct', updateProductDragInDrogController.handle);

// router.post(
//   '/categories',
//   multer().single('file'),
//   createCategoryController.handle
// ); // ok
// router.get('/categories', getAllCategoriesController.handle);
// router.put(
//   '/categories/:id',
//   multer().single('file'),
//   updateCategoryController.handle
// );
// router.put('/orderCategory', updateCategoryDragInDropController.handle);

// router.post(
//   '/subcategory',
//   multer().single('file'),
//   createSubcategoryController.handle
// );
// router.get('/subcategories', getAllSubcategoryFromUserController.handle);
// router.post(
//   '/subcategories/products',
//   getProductsBySubcategoryController.handle
// );
// router.get('/subcategories/:id', getAllSubcategoryController.handle);
// router.get('/subcategory/:id', getOneSubcategoryController.handle);
// router.put(
//   '/subcategory/:id',
//   multer().single('file'),
//   updateSubcategoryController.handle
// );

// router.put('/orderSubcategory', updateSubCategoryDragInDrogController.handle);

// router.delete('/user/:cnpj', deleteUserController.handle);
// router.put('/users', updateUserController.handle);
// router.put('/users/clearAcess', updateUserNumberAcessController.handle);
// router.get('/users', getUserController.handle);
// router.get('/users/all', getAllUsersController.handle);

// router.get('/officeHours', GetOfficeHours.handle);
// router.put('/officeHours/:id', UpdateOfficeHours.handle);

// router.get('/paymentmethods', getUserPaymentMethodsController.handle);
// router.put('/paymentmethods/:id', updateUserPaymentMethodsController.handle);

// router.post('/city', createCityController.handle);
// router.get('/city', getAllCitiesController.handle);
// router.put('/city/:id', updateCityController.handle);

// router.post('/neighborhood', createNeighborhoodController.handle);
// router.get('/neighborhood', getAllNeighborhoodsController.handle);
// router.put('/neighborhood', updateNeighborhoodController.handle);

// router.post('/complementgroup', createComplementGroupController.handle);
// router.get('/complementgroup', getAllComplementGroupController.handle);
// router.put('/complementgroup/:id', updateComplementGroupController.handle);

// router.post(
//   '/complement/:idGroupComplement',
//   createComplementController.handle
// );
// router.get('/complement', getAllComplementsController.handle);
// router.put('/complement', updateComplementController.handle);
// router.get(
//   '/complement/:idGroupComplement',
//   getAllComplementsByComplementGroupController.handle
// );

// router.get('/deliverysettings', getDeliverySettingsController.handle);
// router.put('/deliverysettings/:id', updateDeliverySettingsController.handle);

// router.get('/mandatorydata', getMandatoryDataOfDeliveryController.handle);
// router.put(
//   '/mandatorydata/:id',
//   updateMandatoryDataOfDeliveryController.handle
// );

// router.get('/operations', getOperationsController.handle);
// router.put('/operations/:id', updateServiceModeController.handle);

// router.get('/order', gerOrdersUserController.handle);

// router.post('/coupon', createCouponController.handle);
// router.get('/coupon', getAllCouponFromUserController.handle);
// router.put('/coupon/:id', updateCouponController.handle);

// export default router;
