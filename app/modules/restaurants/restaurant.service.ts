import MenuSchema from './restaurant.menu.schema';
import UserSchema from '../user/user.schema';
import mongoose from 'mongoose';
import { Menu } from './restaurent.dto';
import RestaurantSchema from './restaurent.schema';


export const addItem = async (data: Menu, email: string) => {
  const menu = new MenuSchema(data);
  const addedMenuItem = await menu.save();

  const user = await UserSchema.findOne({email: email});
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
  console.log("hello ji this is amit");
  const restaurants = await RestaurantSchema.find({});
  
  return restaurants;
}
