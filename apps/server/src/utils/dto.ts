import { IsEmail, IsString } from "class-validator";

export class LinkDto {
  @IsString()
  uri: string;
}

export class UserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
  
  @IsString()
  confirmpassword: string;
}

export class LoginDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}