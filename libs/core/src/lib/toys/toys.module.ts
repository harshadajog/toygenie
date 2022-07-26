import { Module } from '@nestjs/common'
import { ToysService } from './toys.service'
import { ToysResolver } from './toys.resolver'

@Module({
  providers: [ToysResolver, ToysService],
})
export class ToysModule {}
