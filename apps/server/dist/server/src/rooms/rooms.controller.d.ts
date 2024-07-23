import { RoomsService } from "./rooms.service";
import { LinkDto } from "@server/utils/dto";
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    createItems(link: LinkDto): Promise<any>;
}
