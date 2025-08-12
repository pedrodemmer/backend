import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from '../Controller/auth.controller';
import { UsersModule } from '../Services/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'SUA_CHAVE_SECRETA_AQUI',
      signOptions: { expiresIn: '1h' },
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}