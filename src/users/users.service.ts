import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import { User } from "./user.entity";
@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) { }
    
    async create(user: CreateUserDto) {
        const data =  this.repo.create(user);
        await this.repo.save(data);
        return data;
    }

    async findOne(id: number) {
        return await this.repo.findOne(id);
    }

    async find(email: string) {
        email= email.toLowerCase();
        const user = await this.repo.find({email})
        console.log(user);
        return user;
    }

    update(id: number,user:Partial<User>) { 
        return this.repo.update(id, user);
    }
    
    remove(id: number) {
        return this.repo.delete(id);
    }
}
