import {Entity,Column, PrimaryGeneratedColumn, AfterInsert, AfterRemove, AfterUpdate} from 'typeorm'
import {Exclude} from 'class-transformer'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @AfterInsert()
    logInsert(){
    }

    @AfterUpdate()
    logUpdate(){}

    @AfterRemove()
    logRemove(){}
}