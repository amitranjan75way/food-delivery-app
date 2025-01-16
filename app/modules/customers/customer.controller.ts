import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'
import * as restaurantService from "../restaurants/restaurant.service";
import * as customerService from "./customer.service";
import createHttpError from "http-errors";


export const getMenuItems = asyncHandler(async (req: Request, res: Response) => {
    const restaurantId = req.params.restaurantId;
    const menuItems = await restaurantService.getMenuItems(restaurantId);
    res.send(createResponse(menuItems, "Menu items fetched successfully"));
});

export const getRestaurants = asyncHandler(async (req: Request, res: Response) => {
  console.log("helo this si controler called")
    const restaurants = await restaurantService.getRestaurantList();
    res.send(createResponse(restaurants, "Restaurant fetched successfully"));
});

export const addItemToCart = asyncHandler(async (req: Request, res: Response) => {
  const restaurantId = req.params.restaurantId;
  const itemId = req.params.itemId;
  if (!restaurantId) {
    throw createHttpError(400, "Restaurant id is required");
  }
  if (!itemId) {
    throw createHttpError(400, "Item id is required");
  }
  if(!req.user) {
    throw createHttpError(401, "User not found, please login again");
  }

  const cart = await customerService.addItemToCartService(req.user.email, restaurantId, itemId);
  res.send(createResponse(cart, "Item added to cart successfully"));
});