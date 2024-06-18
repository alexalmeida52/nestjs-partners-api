import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Prisma } from '@prisma/client';

@Module({
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
