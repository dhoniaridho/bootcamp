import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  list() {
    return [];
  }

  @Get(':id')
  detail(@Param('id') id: string) {
    return id;
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return body;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return id;
  }
}
