import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/platform/database/prisma.service';
import { hashSync, verifySync } from '@node-rs/bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  public async paginate() {
    return await this.prismaService.user.findMany();
  }

  public async getOne(id: string) {
    try {
      const data = await this.prismaService.user.findUnique({
        where: {
          id,
        },
      });
      if (!data) throw new Error('User not found');
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async create(data: CreateUserDto) {
    const exist = await this.prismaService.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (exist?.email || exist.email == data.email)
      throw new Error('Email already registered');

    const user = await this.prismaService.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashSync(data.password),
      },
    });
    return user;
  }

  public async update(id: string, update: UpdateUserDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new Error('User not found');

    const updated = await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        name: update.name,
        email: update.email,
        password: update.password,
      },
    });
    return updated;
  }

  public async deleteOne(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new Error('User not found');

    await this.prismaService.user.delete({
      where: {
        id,
      },
    });

    return null;
  }

  public async getOneByEmail(email: string) {
    try {
      const data = await this.prismaService.user.findFirst({
        where: {
          email,
        },
      });
      if (!data) throw new Error('User not found');
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async verifyPassword(email: string, password: string) {
    try {
      const data = await this.getOneByEmail(email);
      const passwordMatch = verifySync(password, data.password);
      if (!passwordMatch) throw new Error('Wrong password');
      return data;
    } catch (error) {
      throw error;
    }
  }
}
