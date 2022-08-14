import { Module } from '@nestjs/common'
import { MessagingService } from './messaging.service'
import { MessagingResolver } from './messaging.resolver'

@Module({
  providers: [MessagingResolver, MessagingService],
})
export class MessagingModule {}
