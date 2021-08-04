import { Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm'
import { Message } from './message'
import { Agent } from './agent'

@Entity('dispatches')
export class Dispatch {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Message)
  @JoinColumn()
  message: Message;

  @OneToOne(() => Agent)
  @JoinColumn()
  agent: Agent;

  @CreateDateColumn({ type: 'timestamptz' })
  timestamp: Date;
}
