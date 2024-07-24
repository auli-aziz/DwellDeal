import { RoomsService } from "./rooms.service";
import { LinkDto } from "@server/utils/dto";
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    fetchRecents(): Promise<{
        success: boolean;
        recents: (import("mongoose").Document<unknown, {}, import("../models/room.model").RoomInterface> & import("../models/room.model").RoomInterface & Required<{
            _id: string;
        }>)[];
    }>;
    fetchResults(location: string): Promise<{
        success: boolean;
        results: (import("mongoose").Document<unknown, {}, import("../models/room.model").RoomInterface> & import("../models/room.model").RoomInterface & Required<{
            _id: string;
        }>)[];
    }>;
    createItems(link: LinkDto): Promise<any>;
}
