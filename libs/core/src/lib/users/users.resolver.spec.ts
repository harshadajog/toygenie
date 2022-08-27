import { Test, TestingModule } from '@nestjs/testing'
import { UsersResolver } from './users.resolver'
import { UsersService } from './users.service'

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResolver, UsersService],
    }).compile()

    resolver = module.get<UsersResolver>(UsersResolver)
    usersService = module.get<UsersService>(UsersService);
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  describe('findAll', () => {
  it('should return an array of users', async() => {
    const result=[{id: 1, first_name:'John', last_name: 'Smith', email_address:'abc@abc.com', password: 'aaa', roles: 'zzz'}];
    jest.spyOn(usersService, 'findAll').mockImplementation(() => result);
   expect(await usersService.findAll()).toBe(result);
  })
  })

})