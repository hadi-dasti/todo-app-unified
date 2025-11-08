import { IsBoolean, IsNotEmpty, IsString, isString } from 'class-validator';

// Data Transfer Object for Todo items
export class TodoDto {
  @IsString()
  @IsNotEmpty()
  task: string;

  @IsBoolean()
  @IsNotEmpty()
  done: boolean;
}
