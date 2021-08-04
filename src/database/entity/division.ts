import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('divisions')
export class Division {

  @PrimaryGeneratedColumn()
  id: number;

}
