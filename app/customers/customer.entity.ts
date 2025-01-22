import { Entity, ManyToOne, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity';
import { User } from '../user/user.entity';
import { Address } from '../common/entity/address.entity';
import { Cart } from './customer.cart.entity';
import { Order } from './customer.order.entity';
import { ICustomer } from '../customers/customer.dto';

@Entity('customer')
export class Customer extends BaseEntity implements ICustomer {
  @OneToOne(() => User, (user) => user.customer)
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToOne(() => Address, (address) => address.customer, { nullable: true })
  @JoinColumn({ name: 'addressId' })
  address: Address | null;

  @OneToOne(() => Cart, (cart) => cart.customer, { nullable: true })
  @JoinColumn({ name: 'cartId' })
  cart: Cart | null;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[] | null;
}
