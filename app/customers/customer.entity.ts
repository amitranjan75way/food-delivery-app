import { Entity, ManyToOne, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity';
import { User } from '../user/user.entity';
import { Address } from '../common/entity/address.entity';
import { Cart } from './customer.cart.entity';
import { Order } from './customer.order.entity';
import { ICustomer } from '../customers/customer.dto';

@Entity('customer')
export class Customer extends User implements ICustomer {

  @OneToOne(() => Address, { nullable: true })
  @JoinColumn()
  address: Address | null;

  @OneToOne(() => Cart, { nullable: true })
  @JoinColumn()
  cart: Cart | null;

  @OneToMany(() => Order)
  orders: Order[] | null;
}
