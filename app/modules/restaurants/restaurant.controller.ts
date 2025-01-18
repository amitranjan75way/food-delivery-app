import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import { createResponse } from "../../common/helper/response.hepler";
import createHttpError from "http-errors";
import * as restaurantService from "./restaurant.service";
import { Menu } from "./restaurent.dto";
import { IUser } from "../user/user.dto";
import { Payload } from "../../common/dto/base.dto";
import { sendEmail } from "../../common/services/email.service";

export const addItem = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const data: Menu = req.body;
  if(!req.user) {
    throw createHttpError(401, "User not found, please login again");
  }
   
  const addedMenuItem = await restaurantService.addItem(data, req.user.email);
  res.send(createResponse(addedMenuItem, "Item added successfully"));
});

export const updateOrderStatus = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const orderId = req.params.orderId;
  const status = req.body.status;
  const restaurantId = req.params.restaurantId;
  
  const {order, user} = await restaurantService.updateOrderStatus(restaurantId, orderId, status);
  const mailOptions = {
    from: `Food Delivery app - Amit Ranjan`,
    to: `${user.email}`,
    subject: `Status of your order`,
    text: `Hi there your order is ${order.status}`
  }
  await sendEmail(mailOptions);
  res.send(createResponse(order, "Order updated successfully"));
});