import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity';
import { Restaurant } from './restaurant.entity'; 
import { IMenu } from './restaurent.dto'; 

@Entity('menu')
export class Menu extends BaseEntity implements IMenu {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column('decimal')
  price: number;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;
}
