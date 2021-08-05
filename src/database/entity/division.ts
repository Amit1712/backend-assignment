import { Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity('divisions')
export class Division extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

}
