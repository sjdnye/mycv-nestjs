import {Entity,Column, PrimaryGeneratedColumn, AfterInsert, AfterRemove, AfterUpdate} from 'typeorm'

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