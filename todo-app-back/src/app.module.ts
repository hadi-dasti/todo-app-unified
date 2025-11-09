// src/app.module.ts
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoListController } from "./todos/todo.controller";
import { TodoService } from "./todos/todo.service";
import { Todo } from "./todos/todo.entity";
import { TodoModule } from "./todos/todo.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || "5432", 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Todo],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TodoModule
  ],
  controllers: [TodoListController],
  providers: [TodoService],
})
export class AppModule {}
