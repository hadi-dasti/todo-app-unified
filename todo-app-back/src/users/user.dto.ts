import {
  IsString,
  IsNotEmpty,
  IsUUID,
  Matches,
  IsEmail,
} from "class-validator";


// Data Transfer Object (DTO) for User entity
// Includes validation decorators for each property
export class UserDto {
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[آ-ی][آ-ی0-9_]{2,29}$/, {
    message:
      "نام کاربری باید با حرف فارسی شروع شود و فقط شامل حروف فارسی، اعداد و خط زیر (_) باشد.",
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
    }
  )
  password: string;

  @IsEmail({}, { message: "Invalid email format" })
  email: string;
}
