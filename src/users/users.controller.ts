import { Controller,Get,Post,Body,Param, Put, Delete, Query } from '@nestjs/common';
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UsersService } from "./users.service";

@Controller('auth')
export class UsersController {    
    constructor(private userService:UsersService){}

    @Post("/signup")
    async createUser(@Body() body: CreateUserDto) {
        return await this.userService.create(body);   
    }

    @Get("/:id")
    async findUser(@Param() param) {
        return await this.userService.findOne(param.id);
    }

    @Get()
    async findUsersWithEmail(@Query() q) {
        return await this.userService.find(q.email);
    }
    @Put("/update/:id")
    async updateUser(@Param() param,@Body() body:UpdateUserDto) {
        return await this.userService.update(param.id, body);
    }

    @Delete("/remove/:id")
    async removeUser(@Param() param) {
        return await this.userService.remove(param.id);
    }
}
