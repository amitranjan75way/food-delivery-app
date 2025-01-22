import { IAddress } from "../common/dto/address.dto";
import { IOrder } from "../customers/customer.dto";
import { IUser } from "../user/user.dto";


export interface IRestaurant {
  id: string;
  userId: IUser;
  address: IAddress | null;
  menu: IMenu[];
  orders: IOrder[];
}

export interface IMenu {
  id: string; 
  name: string;
  price: number;
  description: string | null;
  isAvailable: boolean;
}
