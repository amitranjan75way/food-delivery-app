import { Entity, ManyToOne, OneToMany, JoinColumn, Column } from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity';
import { User } from '../user/user.entity';
import { Restaurant } from '../restaurants/restaurant.entity';
import { DeliveryStaff } from '../deliveryStaff/deliveryStaff.entity';
import { Menu } from '../restaurants/restaurant.menu.entity';
import { Address } from '../common/entity/address.entity';
import { IOrder } from '../customers/customer.dto';

@Entity('order')
export class Order extends BaseEntity implements IOrder {
  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Restaurant, { nullable: true })
  @JoinColumn()
  restaurant: Restaurant | null;

  @ManyToOne(() => DeliveryStaff, { nullable: true })
  @JoinColumn({ name: 'deliveryStaffId' })
  deliveryStaff: DeliveryStaff | null;

  @OneToMany(() => Menu)
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
function OneToOne(arg0: () => typeof Restaurant, arg1: { nullable: boolean; }): (target: Order, propertyKey: "restaurant") => void {
  throw new Error('Function not implemented.');
}

