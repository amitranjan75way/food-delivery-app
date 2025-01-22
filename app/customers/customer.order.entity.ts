import { Entity, ManyToOne, OneToMany, JoinColumn, Column } from 'typeorm';
import { BaseEntity } from '../common/entities/BaseEntity';
import { User } from '../user/user.entity';
import { Restaurant } from '../restaurants/Restaurant.entity';
import { DeliveryStaff } from '../deliveryStaff/DeliveryStaff.entity';
import { Menu } from '../restaurants/Menu.entity';
import { Address } from '../common/entities/Address.entity';
import { IOrder } from '../customers/customer.dto';

@Entity('order')
export class Order extends BaseEntity implements IOrder {
  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToOne(() => Restaurant, (restaurant) => restaurant.orders, { nullable: true })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant | null;

  @ManyToOne(() => DeliveryStaff, (deliveryStaff) => deliveryStaff.orders, { nullable: true })
  @JoinColumn({ name: 'deliveryStaffId' })
  deliveryStaff: DeliveryStaff | null;

  @OneToMany(() => Menu, (menu) => menu.order)
  items: Menu[];

  @Column('decimal')
  totalAmount: number;

  @Column({
    type: 'enum',
    enum: ['placed', 'accepted', 'rejected', 'prepared', 'dispatched', 'delivered'],
    default: 'placed',
  })
  status: 'placed' | 'accepted' | 'rejected' | 'prepared' | 'dispatched' | 'delivered';

  @ManyToOne(() => Address, (address) => address.orders, { nullable: true })
  @JoinColumn({ name: 'deliveryAddressId' })
  deliveryAddress: Address | null;
}
