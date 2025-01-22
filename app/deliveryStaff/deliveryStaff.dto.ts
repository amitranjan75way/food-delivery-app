import { IUser } from '../user/user.dto'; 
import { IAddress } from '../common/dto/address.dto'; 
import { IOrder } from '../customers/customer.dto'; 
import { User } from '../user/user.entity';
import { Address } from '../common/entity/address.entity';
import { Order } from '../customers/customer.order.entity';

export interface IDeliveryStaff { 
  status: 'active' | 'inactive'; 
  availability: 'available' | 'unavailable'; 
  orders: Order[]; 
}
