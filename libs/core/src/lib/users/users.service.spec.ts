import { Test, TestingModule } from '@nestjs/testing'
import { UsersService } from './users.service'
import {MailSlurp} from 'mailslurp-client';

describe('UsersService', () => {
  let service: UsersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile()

    service = module.get<UsersService>(UsersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it("can signup a new user", async() => {
    const api = new MailSlurp({ apiKey: 'cbea897b54e15b4eee3b811c7160e7c1106775528bf572c306d1baf17db38a9f'! });
    const inbox = await api.createInbox();

    let users = await service.findAll();

    let createUserInput = {
      id: users.length + 1,
      first_name: "Jest",
      last_name: "Test",
      email_address: inbox.emailAddress,
      password: '$2b$10$13DirdZlA3LF8XN4GkD/N.XClqu.EpLpidedIUAk/Ql7ge5VFd0hq',
      roles: 'User'
    }
    expect(await service.create(createUserInput)).toStrictEqual(createUserInput);
  })
})

