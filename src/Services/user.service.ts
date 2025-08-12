import { Injectable } from '@nestjs/common';
import { User } from '../Entities/user';

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  create(userData: Partial<User>): User {
    const user: User = {
      id: this.idCounter++,
      ...userData,
    } as User;
    this.users.push(user);
    return user;
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(u => u.email === email);
  }

  validateUser(email: string, senha: string): User | null {
    const user = this.findByEmail(email);
    if (user && user.senha === senha) {
      return user;
    }
    return null;
  }
}