import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  cpf: string;

  @Column()
  senha: string;

  @Column()
  cep: string;

  @Column({ nullable: true })
  estado: string;

  @Column({ nullable: true })
  cidade: string;

  @Column({ nullable: true })
  bairro: string;

  @Column({ nullable: true })
  rua: string;
}