import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm'
import { Division } from './division'

@Entity('agents')
export class Agent extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Division)
  @JoinColumn()
  division: Division;
}
