
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinTable } from 'typeorm';
import { Student } from './student';
import { Chapter } from './chapter';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @ManyToMany(() => Student, (student) => student.id)
  @JoinTable()
  students: Student[]

  @ManyToOne(() => Chapter, (chapter) => chapter.lesons)
  chapter: Chapter
}
