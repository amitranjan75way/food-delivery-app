import express from 'express';
import { catchError } from '../../common/middleware/cath-error.middleware';
import * as authMiddlerware from '../../common/middleware/auth.middleware';
import * as customerController from './customer.controller';

const router = express.Router();

router
      .post("/addItemToCart/:restaurantId/:itemId", authMiddlerware.auth, authMiddlerware.isCustomer, catchError, customerController.addItemToCart)
      .get("/restaurantList", authMiddlerware.auth, authMiddlerware.isCustomer, customerController.getRestaurants)
      .get("/:restaurantId", authMiddlerware.auth, authMiddlerware.isCustomer, customerController.getMenuItems)
      

export default router;