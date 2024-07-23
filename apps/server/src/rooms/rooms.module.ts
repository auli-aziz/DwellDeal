import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import Room from "../models/room.model";
import { RoomsController } from "./rooms.controller";
import { RoomsService } from "./rooms.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Room', schema: Room.schema }]),
  ],
  controllers: [RoomsController],
  providers: [RoomsService],
})

export class RoomsModule {}