import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./Users.entity";

export enum TaskProgress {
    NOTSTARTED = "not started",
    INPROGRESS = "in progress",
    DONE = "done"
}

@Entity()
class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({})
    title:string;

    @Column({})
    description: string;

    @Column({type:"enum", enum: TaskProgress, default:TaskProgress.NOTSTARTED})
    progress: TaskProgress

    @CreateDateColumn({type:"date"})
    creatredAt: string

    @ManyToOne(() => User, (user) => user.tasks)
    user: User
}

export default Task