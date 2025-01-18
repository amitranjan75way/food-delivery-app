import MenuSchema from './restaurant.menu.schema';
import UserSchema from '../user/user.schema';
import mongoose from 'mongoose';
import { Menu } from './restaurent.dto';
import RestaurantSchema from './restaurent.schema';
import OrderSchema from '../customers/customer.order.schema';
import createHttpError from 'http-errors';


export const addItem = async (data: Menu, email: string) => {
  const menu = new MenuSchema(data);
  const addedMenuItem = await menu.save();

  const user = await UserSchema.findOne({ email: email });
  if (!user) {
    throw new Error('User not found');
  }
  const restaurantId = user.additionalInfo;

  const restaurant = await RestaurantSchema.findByIdAndUpdate(restaurantId, {
    $push: { menu: addedMenuItem._id },
  });

  return addedMenuItem;

}

export const getMenuItems = async (restaurantId: string) => {
  const restaurant = await RestaurantSchema.findById(restaurantId).populate('menu');
  return restaurant;
}

export const getRestaurantList = async () => {
  const restaurants = await RestaurantSchema.find({});

  return restaurants;
}

export const acceptRejectOrder = async (restaurantId: string, orderId: string, status: string) => {
  const order = await OrderSchema.findByIdAndUpdate(orderId, { status: status }, { new: true });
  if (!order) {
    throw createHttpError(404, 'Order not found');
  }
  const restaurant = await RestaurantSchema.findByIdAndUpdate(restaurantId, { orders: order._id }, { new: true });
  if (!restaurant) {
    throw createHttpError(404, 'Restaurant not found');
  }
  const user = await UserSchema.findById(order.userId);
  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  return {order, user};
}
