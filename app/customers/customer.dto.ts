import { IAddress } from "../common/dto/address.dto";
import { Address } from "../common/entity/address.entity";
import { IDeliveryStaff } from "../deliveryStaff/deliveryStaff.dto";
import { DeliveryStaff } from "../deliveryStaff/deliveryStaff.entity";
import { Restaurant } from "../restaurants/restaurant.entity";
import { Menu } from "../restaurants/restaurant.menu.entity";
import { IMenu, IRestaurant } from "../restaurants/restaurent.dto";
import { IUser } from "../user/user.dto";
import { User } from "../user/user.entity";
import { Cart } from "./customer.cart.entity";
import { Order } from "./customer.order.entity";


export interface IOrder {
  restaurant: Restaurant;
  deliveryStaff?: DeliveryStaff | null; 
  items: Menu[];
  totalAmount: number;
  status: 'placed' | 'accepted' | 'rejected' | 'prepared' | 'dispatched' | 'delivered';
  deliveryAddress?: Address | null; 
}


export interface ICart {
  id: string; 
  user: User; 
  items: Menu[]; 
  restaurant: Restaurant | null; 
  totalAmount: number; 
}

export interface ICustomer {
  address: Address | null;
  cart: Cart | null;
  orders: Order[] | null;
}