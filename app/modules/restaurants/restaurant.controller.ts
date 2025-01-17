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

const acceptRejectOrder = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const data: Payload = req.body;
  if(!req.user) {
    throw createHttpError(401, "User not found, please login again");
  }
  const updatedOrder = await restaurantService.acceptRejectOrder(data, req.user.email);
  res.send(createResponse(updatedOrder, "Order updated successfully"));
});