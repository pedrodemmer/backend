import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../Auth/auth.service';
import { UserService } from '../Services/user.service';
import { RegisterDto } from '../DTO/RegisterDTO';
import { LoginDto } from '../DTO/LoginDTO';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  @Post('register')
  async register(@Body() userData: RegisterDto) {
    const user = await this.userService.create(userData);
    return { message: 'Usuário registrado com sucesso!', user };
  }

  @Post('login')
  async login(@Body() loginData: LoginDto) {
    const user = await this.authService.validateUser(loginData.email, loginData.senha);
    if (!user) {
      return { message: 'Credenciais inválidas!' };
    }
    return this.authService.login(user);
  }
}