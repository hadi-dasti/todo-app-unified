import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoListController } from "./todo.controller";
import { TodoService } from "./todo.service";
import { Todo } from "./todo.entity";


@Module({
   imports:[TypeOrmModule.forFeature([Todo])],
   providers :[TodoService],
   controllers :[TodoListController]
})

export class TodoModule{}
