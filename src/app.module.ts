import { Module } from "@nestjs/common";
import { StudentModule } from "./student/student.module";
import { LessonModule } from "./lesson/lesson.module";
import { ChapterModule } from "./chapter/chapter.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from "./entities/lesson";
import { Student } from "./entities/student";
import { Chapter } from "./entities/chapter";

@Module({
  imports: [StudentModule, LessonModule, ChapterModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'z10mz10m',
    database: 'typeorm-sadna-shafran',
    entities: [Lesson, Student, Chapter],
    synchronize: true,
  }),],
})
export class AppModule {}
