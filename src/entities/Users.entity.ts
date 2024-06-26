import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Task from "./tasks.entity";

@Entity()
class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type:"varchar", length:80})
    name: string;

    @Column({type:"varchar"})
    number: string

    @Column({unique:true, length:150, type:"varchar"})
    email: string

    @Column({type:"varchar", length:200})
    password: string

    @CreateDateColumn({type:'date'})
    createdAt: string

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[]
}


export default User