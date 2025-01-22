import { IUser } from '../user/user.dto'; 
import { IAddress } from '../common/dto/address.dto'; 
import { IOrder } from '../customers/customer.dto'; 

export interface IDeliveryStaff {
  id: string; 
  userId: IUser; 
  address: IAddress | null; 
  status: 'active' | 'inactive'; 
  availability: 'available' | 'unavailable'; 
  orders: IOrder[]; 
}
