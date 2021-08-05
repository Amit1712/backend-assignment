import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToOne, JoinColumn, BaseEntity } from 'typeorm'
import { Message } from './message'
import { Agent } from './agent'

@Entity('dispatches')
export class Dispatch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Message)
  @JoinColumn()
  message: Message;

  @ManyToOne(() => Agent)
  @JoinColumn()
  agent: Agent;

  @CreateDateColumn({ type: 'timestamptz' })
  timestamp: Date;
}
