import { Todo } from "src/todos/todo.entity";
import { Entity,Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";



@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    username:string;

    @Column()
    @Exclude()
    password:string;

    @Column()
    email : string;

    @OneToMany(()=>Todo, todo=>todo.user)
    todos: Todo[];
}