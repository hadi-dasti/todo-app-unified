import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository } from 'typeorm';
import { Todo } from './todo.entity';   



@Injectable()
export class TodoService {
    constructor( @InjectRepository(Todo)
    private readonly todoRepository:Repository<Todo>){}
   
    async findAllTodos(): Promise<Todo[]> {
        try{
           const allTodos = await this.todoRepository.find();
           if(allTodos.length === 0){
                return [];
           }

           const filterTodo = allTodos.filter(todo => todo.done === false);

           
           return filterTodo;
                }catch(error){
            console.log(error)
            return [];
        }
    }
}
