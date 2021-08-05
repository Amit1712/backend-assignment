import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity, ManyToOne } from 'typeorm'
import { Division } from './division'

@Entity('messages')
export class Message extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Division)
  @JoinColumn()
  division: Division;

  @Column({ default: false })
  done: boolean;
}
