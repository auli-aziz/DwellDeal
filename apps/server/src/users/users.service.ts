import { Injectable, Scope } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserInterface } from "./user.model";
import { Model } from "mongoose";

@Injectable({ scope: Scope.DEFAULT })
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserInterface>
  ) {}
}