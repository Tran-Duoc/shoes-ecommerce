import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from 'src/common/dto/base.dto';
import { Expose } from 'class-transformer';

export class UserDTO extends BaseDTO {
  @Expose()
  @IsNotEmpty()
  name: string;
  @Expose()
  @IsNotEmpty()
  age: number;
}
