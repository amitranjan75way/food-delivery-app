import { Entity, ManyToOne, JoinColumn, Column, OneToMany, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity';
import { User } from '../user/user.entity';
import { Menu } from '../restaurants/restaurant.menu.entity';  // Correct path for Menu entity
import { Restaurant } from '../restaurants/restaurant.entity'; // Correct path for Restaurant entity
import { ICart } from '../customers/customer.dto';

@Entity('cart')
export class Cart extends BaseEntity implements ICart {
  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToMany(() => Menu)
  @JoinTable({
    name: 'cart_items', 
    joinColumn: { name: 'cartId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'menuId', referencedColumnName: 'id' },
  })
  items: Menu[];

  @OneToOne(() => Restaurant, { nullable: true })
  @JoinColumn()
  restaurant: Restaurant | null;

  @Column('decimal')
  totalAmount: number;
}
