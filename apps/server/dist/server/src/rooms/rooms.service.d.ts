import { Model } from 'mongoose';
import { RoomInterface } from '@server/models/room.model';
import { LinkDto } from '@server/utils/dto';
export declare class RoomsService {
    private readonly roomModel;
    constructor(roomModel: Model<RoomInterface>);
    getRecents(): Promise<(import("mongoose").Document<unknown, {}, RoomInterface> & RoomInterface & Required<{
        _id: unknown;
    }>)[]>;
    scrapeAndStore(link: LinkDto): Promise<{
        success: boolean;
    }>;
}
