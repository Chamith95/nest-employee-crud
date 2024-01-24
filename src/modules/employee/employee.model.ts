import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class EmployeeDTO {
  id: never;

  @ApiProperty()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty()
  @IsNotEmpty()
  last_name: string;
  
  @ApiProperty()
  @IsNotEmpty()
  email: string;
  

  @ApiProperty()
  @IsNotEmpty()
  number: string;
  
  @ApiProperty()
  @IsNotEmpty()
  gender: string;

  @ApiProperty()
  @IsNotEmpty()
  photo: string;

}

export class UpdateEmployeeDTO extends PartialType(EmployeeDTO) {}

