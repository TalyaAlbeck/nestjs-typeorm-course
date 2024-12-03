
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  bodt: string;

  @Column()
  student_id: number;
}
