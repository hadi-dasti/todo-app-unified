import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository } from 'typeorm';
import { Todos } from './todo.entity';   



@Injectable()
export class TodoService {
    constructor( @InjectRepository(Todos)
    private readonly todoRepository:Repository<Todos>){}
   
    async findAllTodos(): Promise<Todos[]> {
        try{
           const allTodos = await this.todoRepository.find();
           if(allTodos.length === 0){
                return [];
           }

           const filterTodo = allTodos.filter(todo => todo.done === false);

           
           return filterTodo;
                }catch(error){
            console.log(error)
        }
    }
}
