import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Field name must be added' })
  @IsString()
  name: string;
}
