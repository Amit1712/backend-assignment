import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Division } from './division'

@Entity('agents')
export class Agent {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Division)
  @JoinColumn()
  division: Division;
}
