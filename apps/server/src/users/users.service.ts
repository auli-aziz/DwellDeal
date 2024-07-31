import { BadRequestException, ConflictException, Injectable, Scope } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserInterface } from "./user.model";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import { UserDto } from "@server/utils/dto";

@Injectable({ scope: Scope.DEFAULT })
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserInterface>
  ) {}

  async create(userDto: UserDto) {
    const user = await this.userModel.findOne({ email: userDto.email });
    if(user) throw new ConflictException("Email duplicated.");

    // password validation
    if(userDto.password !== userDto.confirmpassword) throw new BadRequestException("Passwords do not match.");
    if (userDto.password.length < 6) throw new BadRequestException("Password must be at least 6 characters long.");

    const newUser = new this.userModel({
      email: userDto.email,
      name: userDto.name,
      password: await bcrypt.hash(userDto.password, 10),
      tracked: [],
      favorites: []
    });

    const result = await newUser.save();
    return result;
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }
  
  async findById(id: string) {
    return await this.userModel.findOne({ _id: id });
  }
}