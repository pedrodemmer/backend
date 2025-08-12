import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from '../Controller/auth.controller';
import { UserService } from '../Services/user.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'SUA_CHAVE_SECRETA_AQUI',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}