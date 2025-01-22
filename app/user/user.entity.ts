import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity'; 
import { IUser } from './user.dto';

@Entity('users')
export class User extends BaseEntity implements IUser {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', enum: ['CUSTOMER', 'RESTAURANT', 'DELIVERY_STAFF'] })
  role: 'CUSTOMER' | 'RESTAURANT' | 'DELIVERY_STAFF';

  @Column({ type: 'varchar', nullable: true })
  refreshToken: string;

  @Column({ type: 'uuid', nullable: true })
  additionalInfo: string | null;
}
