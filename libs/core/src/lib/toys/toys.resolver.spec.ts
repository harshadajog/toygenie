import { Test, TestingModule } from '@nestjs/testing'
import { ToysResolver } from './toys.resolver'
import { ToysService } from './toys.service'

describe('ToysResolver', () => {
  let resolver: ToysResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToysResolver, ToysService],
    }).compile()

    resolver = module.get<ToysResolver>(ToysResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
