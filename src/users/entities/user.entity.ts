import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 30, nullable: false })
  name: string;

  @Column({ unique: true })
  email: string;
}
