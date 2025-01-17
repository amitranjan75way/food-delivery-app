import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import { createResponse } from "../../common/helper/response.hepler";
import createHttpError from "http-errors";
import * as restaurantService from "./restaurant.service";
import { Menu } from "./restaurent.dto";
import { IUser } from "../user/user.dto";
import { Payload } from "../../common/dto/base.dto";

export const addItem = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const data: Menu = req.body;
  if(!req.user) {
    throw createHttpError(401, "User not found, please login again");
  }
   
  const addedMenuItem = await restaurantService.addItem(data, req.user.email);
  res.send(createResponse(addedMenuItem, "Item added successfully"));
});

export const acceptRejectOrder = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const orderId = req.params.orderId;
  const status = req.body.status;
  const restaurantId = req.params.restaurantId;
  if (!orderId) {
    throw createHttpError(400, "Order id is required");
  }
  if (!status) {
    throw createHttpError(400, "Status is required");
  }
  if(status !== "CONFIRMED" && status !== "CENCELED") {
    throw createHttpError(400, "Invalid status");
  }
  const order = await restaurantService.acceptRejectOrder(restaurantId, orderId, status);
  res.send(createResponse(order, "Order updated successfully"));
});