import { User } from "src/users/user.entity";
import {Entity,Column,PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class Todo{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    task:string;

    @Column({default:false})
    done:boolean;

    @ManyToOne(()=>User, user=>user.todos, {onDelete:'CASCADE'})
    @JoinColumn({name:"user_id"})
    user: User;

    @Column({nullable:true})
    user_id: string;
}