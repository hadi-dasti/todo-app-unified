import { Controller, Get } from '@nestjs/common';


// todo.controller.ts.controller.ts
@Controller('todos')
export class TodoListController {
  @Get()
  findAllTodos():string{
     return "Hello from TodoControllerTsController";
  }
}
