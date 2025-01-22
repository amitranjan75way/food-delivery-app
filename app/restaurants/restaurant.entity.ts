import { Entity, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity';
import { User } from '../user/user.entity';
import { Address } from '../common/entity/address.entity';
import { Menu } from './restaurant.menu.entity';
import { Order } from '../customers/customer.order.entity';
import { IRestaurant } from './restaurent.dto';


@Entity('restaurant')
export class Restaurant extends BaseEntity implements IRestaurant {
  @OneToOne(() => User, (user) => user.restaurant)
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToOne(() => Address, (address) => address.restaurant, { nullable: true })
  @JoinColumn({ name: 'addressId' })
  address: Address | null;

  @OneToMany(() => Menu, (menu) => menu.restaurant)
  menu: Menu[];

  @OneToMany(() => Order, (order) => order.restaurant)
  orders: Order[];
}
