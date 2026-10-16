
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Title harus diisi' })
  @IsString({ message: 'Title harus berupa teks' })
  readonly title: string;

  @IsNotEmpty({ message: 'Author harus diisi' })
  @IsString({ message: 'Author harus berupa teks' })
  readonly author: string;

  @IsNotEmpty({ message: 'ISBN harus diisi' })
  @IsString({ message: 'ISBN harus berupa teks' })
  readonly isbn: string;

  @IsNotEmpty({ message: 'Tahun terbit harus diisi' })
  @IsInt({ message: 'Tahun terbit harus berupa angka bulat' })
  readonly publishedYear: number;

  @IsBoolean({ message: 'Status ketersediaan harus berupa boolean' })
  readonly isAvailable: boolean;
}
