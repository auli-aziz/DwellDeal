import { BadRequestException, Body, Controller, Get, InternalServerErrorException, Post, Res } from "@nestjs/common";
import { RoomsService } from "./rooms.service";
import { LinkDto } from "@server/utils/dto";

@Controller("rooms")
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get("/recents")
  async fetchRecents() {
    try {
      const recents = await this.roomsService.getRecents();     
      return { success: true, recents };
    } catch(error: any) {
      if (error instanceof BadRequestException || error instanceof InternalServerErrorException) {
        throw error;
      } else {
        throw new InternalServerErrorException('Unexpected error occurred');
      }
    }
  }

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