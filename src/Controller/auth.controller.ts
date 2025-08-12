import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../Auth/auth.service';
import { UserService } from '../Services/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  @Post('register')
  register(@Body() userData: any) {
    const user = this.userService.create(userData);
    return { message: 'Usuário registrado com sucesso!', user };
  }

  @Post('login')
  login(@Body() loginData: any) {
    const user = this.authService.validateUser(loginData.email, loginData.senha);
    if (!user) {
      return { message: 'Credenciais inválidas!' };
    }
    return this.authService.login(user);
  }
}