import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import { SpotStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SpotsService {
  constructor(private prismaService: PrismaService) {}

  async create(createSpotDto: CreateSpotDto & { eventId: string }) {
    const event = await this.prismaService.event.findFirst({
      where: { id: createSpotDto.eventId }
    });

    if(!event) {
      return new BadRequestException('Evento não encontrado!');
    }

    return this.prismaService.spot.create({
      data: {
        ...createSpotDto,
        status: SpotStatus.available
      }
    });
  }

  findAll(eventId: string) {
    return `This action returns all spots`;
  }

  findOne(eventId: string, spotId: string) {
    return this.prismaService.spot.findFirst({
      where: {
        id: spotId,
        eventId
      }
    });
  }

  update(eventId: string, spotId: string, updateSpotDto: UpdateSpotDto) {
    return `This action updates a #${spotId} spot from eventId #${eventId}`;
  }

  remove(eventId: string, spotId: string) {
    return `This action removes a #${spotId} spot from eventId #${eventId}`;
  }
}
