import { IAddress } from "../common/dto/address.dto";
import { IDeliveryStaff } from "../deliveryStaff/deliveryStaff.dto";
import { IMenu, IRestaurant } from "../restaurants/restaurent.dto";
import { IUser } from "../user/user.dto";


export interface IOrder {
  id: string;
  userId: IUser;
  restaurant: IRestaurant;
  deliveryStaff?: IDeliveryStaff | null; 
  items: IMenu[];
  totalAmount: number;
  status: 'placed' | 'accepted' | 'rejected' | 'prepared' | 'dispatched' | 'delivered';
  deliveryAddress?: IAddress | null; 
}


export interface ICart {
  id: string; 
  user: IUser; 
  items: IMenu[]; 
  restaurant: IRestaurant | null; 
  totalAmount: number; 
}

export interface ICustomer {
  id: string;
  user: IUser;
  address: IAddress | null;
  cart: ICart | null;
  orders: IOrder[] | null;
}