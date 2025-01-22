import { Entity, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity';
import { User } from '../user/user.entity';
import { Address } from '../common/entity/address.entity';
import { Menu } from './restaurant.menu.entity';
import { Order } from '../customers/customer.order.entity';
import { IRestaurant } from './restaurent.dto';


@Entity('restaurant')
export class Restaurant extends User implements IRestaurant {

  @OneToOne(() => Address, { nullable: true })
  @JoinColumn()
  address: Address | null;

  @OneToMany(() => Menu)
  menu: Menu[];

  @OneToMany(() => Order)
  orders: Order[];
}
