import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async signIn(signInDto: SignInDto) {
    try {
      const user = await this.userService.verifyPassword(
        signInDto.email,
        signInDto.password,
      );

      const accessToken = this.jwtService.sign({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });

      return {
        accessToken,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  public async signUp(signUpDto: SignUpDto) {
    const data = await this.userService.create({
      email: signUpDto.email,
      name: signUpDto.name,
      password: signUpDto.password,
    });

    return data;
  }
}
