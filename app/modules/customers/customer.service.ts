import restaurantMenuSchema from "../restaurants/restaurant.menu.schema";
import userSchema from "../user/user.schema";
import customerCartSchema from "./customer.cart.schema";
import customerSchema from "./customer.schema";
import mongoose from "mongoose";
import createHttpError from "http-errors";

export const addItemToCartService = async ( userEmail: string, restaurantId: string, itemId: string) => {
  
  const user = await userSchema.findOne({ email: userEmail });
  if (!user) {
    throw new Error("User not found");
  }

  // Fetch customer
  const customer = await customerSchema.findById(user.additionalInfo);
  if (!customer) {
    throw createHttpError(404, "Customer not found");
  }

  // Fetch customer's cart
  const cart = await customerCartSchema.findById(customer.cart);
  if (!cart) {
    throw createHttpError(404, "Cart not found");
  }

  // Fetch item from restaurant menu
  const item = await restaurantMenuSchema.findById(itemId);
  if (!item) {
    throw createHttpError(404, "Item not found");
  }

  // If restaurantId is different, clear cart and add the new item
  if (cart.restaurantId && cart.restaurantId.toString() !== restaurantId) {
    cart.items = [];
    cart.totalAmount = 0;
    cart.restaurantId = new mongoose.Types.ObjectId(restaurantId);
  }

  // Check if the item is already in the cart
  const itemIndex = cart.items.findIndex(
    (cartItemId) => cartItemId.toString() === itemId
  );

  if (itemIndex >= 0) {
    // Item already in cart, remove it
    cart.items.splice(itemIndex, 1);
    cart.totalAmount -= item.price;
  } else {
    // Add item to cart
    cart.items.push(new mongoose.Types.ObjectId(itemId));
    cart.totalAmount += item.price;
  }

  // Save cart
  await cart.save();

  return cart;
};
