import { Column, PrimaryGeneratedColumn, Entity, BeforeInsert } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    lowerCase() {
        
        this.email=this.email.toLowerCase();
        this.email = this.email.replace(" ", "");
    }
}