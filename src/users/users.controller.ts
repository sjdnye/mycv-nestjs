import { Controller, Post, Get, Body, Delete, Param, Put, Query, Patch, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';


@Controller('auth')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post('signup')
    createUser(@Body() body: CreateUserDto){
       return this.usersService.create(body.email, body.password);
    }

    @Get('/:id')
    async findUser(@Param('id')id:string){
       const user =  await this.usersService.findOne(parseInt(id));
       if(!user){
            throw new NotFoundException('user not found');
       }
       return user;
    }

    @Get()
    findAllUsers(@Query('email') email: string){
        this.usersService.find(email);
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() Body: UpdateUserDto){
         return this.usersService.update(parseInt(id), Body);
    }

    @Delete("/:id")
    removeUser(@Param('id') id: string){
        return this.usersService.remove(parseInt(id));
    }

}
