import { Test, TestingModule } from '@nestjs/testing'
import { MessagingResolver } from './messaging.resolver'
import { MessagingService } from './messaging.service'

describe('MessagingResolver', () => {
  let resolver: MessagingResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagingResolver, MessagingService],
    }).compile()

    resolver = module.get<MessagingResolver>(MessagingResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
