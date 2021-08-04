import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Division } from './division'

@Entity('messages')
export class Message {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @OneToOne(() => Division)
  @JoinColumn()
  division: Division;

  @Column({ default: false })
  done: boolean;
}
