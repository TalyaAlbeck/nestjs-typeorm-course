
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  lesson_id: number;
}
