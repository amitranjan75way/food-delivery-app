import { Entity, ManyToOne, OneToMany, JoinColumn, Column } from 'typeorm';
import { IDeliveryStaff } from './deliveryStaff.dto'; 
import { Address } from "../common/entity/address.entity";
import { BaseEntity } from "../common/entity/base.entity";
import { Order } from "../customers/customer.order.entity";
import { User } from "../user/user.entity";

@Entity('delivery_staff')
export class DeliveryStaff extends User implements IDeliveryStaff {

  @Column({ type: 'enum', enum: ['active', 'inactive'], default: 'active' })
  status: 'active' | 'inactive';

  @Column({ type: 'enum', enum: ['available', 'unavailable'], default: 'available' })
  availability: 'available' | 'unavailable';

  @OneToMany(() => Order)
  orders: Order[];
}
