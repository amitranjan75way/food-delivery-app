import { IAddress } from "../common/dto/address.dto";
import { Address } from "../common/entity/address.entity";
import { IOrder } from "../customers/customer.dto";
import { Order } from "../customers/customer.order.entity";
import { IUser } from "../user/user.dto";
import { User } from "../user/user.entity";
import { Menu } from "./restaurant.menu.entity";


export interface IRestaurant {
  address: Address | null;
  menu: Menu[];
  orders: Order[];
}

export interface IMenu {
  name: string;
  price: number;
  description: string | null;
  isAvailable: boolean;
}
