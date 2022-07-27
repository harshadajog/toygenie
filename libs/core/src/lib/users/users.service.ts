import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { AuthEnum } from '../auth/enums/AuthEnum';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email_address: 'testuser8@gmail.com',
      // password: 'more-secure'
      password: '$2b$10$cj.en4m0UFNuetd4OE6f5eJtarOx.s.ZkuzDV6BdZsTND1nkNpy/e'
    },
    {
      id: 2,
      first_name: 'Mary',
      last_name: 'Poppins',
      email_address: 'testuser1@gmail.com',
      // password: 'more-secure'
      password: '$2b$10$13DirdZlA3LF8XN4GkD/N.XClqu.EpLpidedIUAk/Ql7ge5VFd0hq'
    }
  ]

  create(createUserInput: CreateUserInput, authVal: AuthEnum) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1,
      auth_type: authVal
    };
    this.users.push(user);

    console.log(this.users);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(email_address: string) {
    console.log("Inside user service findOne");
    console.log(this.users.find((user) => user.email_address === email_address));
    return this.users.find((user) => user.email_address === email_address);
  }
}
