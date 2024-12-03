
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Lesson } from './lesson';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: "first_name"})
  firstName: string;

  @Column({name: "last_name"})
  lastName: string;

  @ManyToMany(() => Lesson, (lesson) => lesson.id)
  lessons: Lesson[]

  @Column({ default: true })
  non_omnivores: boolean;
}
