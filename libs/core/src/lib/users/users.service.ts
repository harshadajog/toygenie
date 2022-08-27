import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email_address: 'testuser1@gmail.com',
      // password: 'more-secure'
      password: '$2b$10$cj.en4m0UFNuetd4OE6f5eJtarOx.s.ZkuzDV6BdZsTND1nkNpy/e'
    },
    {
      id: 2,
      first_name: 'Mary',
      last_name: 'Poppins',
      email_address: 'testuser2@gmail.com',
      // password: 'more-secure'
      password: '$2b$10$13DirdZlA3LF8XN4GkD/N.XClqu.EpLpidedIUAk/Ql7ge5VFd0hq'
    },
    {
      id: 3,
      first_name: 'Test',
      last_name: 'User3',
      email_address: 'testuser3@gmail.com',
      // password: 'more-secure'
      password: '$2b$10$13DirdZlA3LF8XN4GkD/N.XClqu.EpLpidedIUAk/Ql7ge5VFd0hq'
    }
  ]

  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1
    };
    this.users.push(user);

    console.log(this.users);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(email_address: string) {
    console.log("[USER SERVICE - FIND ONE]");
    let user = this.users.find((user) => user.email_address === email_address);
    // if(!user){
    //   throw new Error('User does not exist in the system!');
    // }
    return this.users.find((user) => user.email_address === email_address);
  }

  findUserById(id: number) {
    console.log("Inside user service findUserById");
    console.log(this.users.find((user) => user.id === id));
    return this.users.find((user) => user.id === id);
  }
}
