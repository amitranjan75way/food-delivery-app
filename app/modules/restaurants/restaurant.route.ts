import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as restaurantController from "./restaurant.controller";
import * as restaurantValidator from "./restaurant.validation";
import * as authMiddlerware from "../../common/middleware/auth.middleware";

const router = Router();

router
      .post('/add-item',authMiddlerware.auth, authMiddlerware.isRestaurant, restaurantValidator.addItemValidator, catchError, restaurantController.addItem)
      .post('/accept-reject-order/:restaurantId/:orderId',authMiddlerware.auth, authMiddlerware.isRestaurant, restaurantValidator.acceptRejectOrderValidator, catchError, restaurantController.acceptRejectOrder);


export default router;