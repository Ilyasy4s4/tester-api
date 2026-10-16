
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Nama harus diisi' })
  @IsString({ message: 'Nama harus berupa teks' })
  name: string;

  @IsNotEmpty({ message: 'Email harus diisi' })
  @IsEmail({}, { message: 'Format email tidak valid' })
  email: string;

  @IsNotEmpty({ message: 'Password harus diisi' })
  @IsString({ message: 'Password harus berupa teks' })
  @MinLength(6, {
    message: 'Password minimal 6 karakter',
  })
  password: string;
}
