import { Entity, ManyToOne, OneToMany, JoinColumn, Column } from 'typeorm';
import { IDeliveryStaff } from './deliveryStaff.dto'; 
import { Address } from "../common/entity/address.entity";
import { BaseEntity } from "../common/entity/base.entity";
import { Order } from "../customers/customer.order.entity";
import { User } from "../user/user.entity";

@Entity('delivery_staff')
export class DeliveryStaff extends BaseEntity implements IDeliveryStaff {
  @ManyToOne(() => User, (user) => user.deliveryStaff)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Address, (address) => address.deliveryStaff, { nullable: true })
  @JoinColumn({ name: 'addressId' })
  address: Address | null;

  @Column({ type: 'enum', enum: ['active', 'inactive'], default: 'active' })
  status: 'active' | 'inactive';

  @Column({ type: 'enum', enum: ['available', 'unavailable'], default: 'available' })
  availability: 'available' | 'unavailable';

  @OneToMany(() => Order, (order) => order.deliveryStaff)
  orders: Order[];
}
