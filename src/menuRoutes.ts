// import { Router } from 'express';

// import getMenuContentController from './useCases/Menu/GetMenuContent';
// import getSubcategoriesFromCategoryController from './useCases/Menu/GetSubcategoryFromCatagory';
// import getProductsFromSubCategoryController from './useCases/Menu/GetProductsBySubCategory';
// import getOperationsController from './useCases/Menu/GetOperations';
// import getGetSchedulesController from './useCases/Menu/GetSchedules';
// import getProductsHighlightedController from './useCases/Menu/GetProductsHighlighted';
// import getPaymentMethodController from './useCases/Menu/GetPaymentMethod';
// import getMandatoryDataOfDeliveryController from './useCases/Menu/GetMandatoryDataOfDelivery';
// import createOrderController from './useCases/Orders/CreateOrder';
// import isValidCouponController from './useCases/Coupon/IsValidCoupon';
// import isPaidMenuController from './middleware/IsPaidMenu';
// import getProductsByOperationController from './useCases/Menu/GetProductsByOperation';
// import getFacebookPixelController from './useCases/Menu/GetFacebookPixel';
// import updateNumberAccessController from './useCases/Menu/UpdateNumberAccess';

// const router = Router();

// router.use('/menuContent/:subDomain', isPaidMenuController.handle);

// router.post(
//   '/menuContent/:subDomain/access',
//   updateNumberAccessController.handle
// );

// router.get(
//   '/menuContent/:subDomain/operations',
//   getOperationsController.handle
// );

// router.get(
//   '/menuContent/:subDomain/schedules',
//   getGetSchedulesController.handle
// );

// router.get(
//   '/menuContent/:subDomain/facebook',
//   getFacebookPixelController.handle
// );

// router.get(
//   '/menuContent/:subDomain/paymentMethod',
//   getPaymentMethodController.handle
// );

// router.get(
//   '/menuContent/:subDomain/mandatoryData',
//   getMandatoryDataOfDeliveryController.handle
// );

// router.post(
//   '/menuContent/:subDomain/couponisvalid',
//   isValidCouponController.handle
// );

// router.post('/menuContent/:subDomain/order', createOrderController.handle);

// router.get(
//   '/menuContent/:subDomain/:enableIn',
//   getMenuContentController.handle
// );

// router.get(
//   '/menuContent/:subDomain/category/:category',
//   getSubcategoriesFromCategoryController.handle
// );

// router.get(
//   '/menuContent/:subDomain/products/:enableIn',
//   getProductsByOperationController.handle
// );

// router.get(
//   '/menuContent/:subDomain/productsHighlighted/:enableIn',
//   getProductsHighlightedController.handle
// );

// router.get(
//   '/menuContent/:subDomain/:category/:subcategory/:enableIn',
//   getProductsFromSubCategoryController.handle
// );

// export default router;
