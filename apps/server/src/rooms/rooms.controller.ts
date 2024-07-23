import { BadRequestException, Body, Controller, InternalServerErrorException, Post } from "@nestjs/common";
import { RoomsService } from "./rooms.service";
import { LinkDto } from "@server/utils/dto";

@Controller("rooms")
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  async createItems(@Body() link: LinkDto): Promise<any> {
    try {
      if (!link) {
        throw new BadRequestException('Missing link parameter');
      }
      const scrapedRooms = await this.roomsService.scrapeAndStore(link);
      return { scrapedRooms };
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof InternalServerErrorException) {
        throw error;
      } else {
        throw new InternalServerErrorException('Unexpected error occurred');
      }
    }
  }
}