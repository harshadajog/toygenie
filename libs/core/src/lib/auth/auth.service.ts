import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import  { User }  from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import {LoginUserInput} from '../login/dto/login-user-input';
import { CreateUserInput } from '../users/dto/create-user.input';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(emailaddress: string, password: string): Promise<any> {
   
    console.log("[AUTH SERVICE - VALIDATE USER] ");
    console.log("emailaddress: " + emailaddress + " password: " + password);
    let user = await this.usersService.findOne(emailaddress);
    // if(!user){
    //   throw new Error('User does not exist in the system!');
    // }
    if(user){
      let valid = await bcrypt.compare(password, user?.password);
    
    if (valid) { 
      const { password, ...result } = user;
      return result;
    }
  }
}
  
  async login(user: User) {
   try{
    //The payload will be extracted by jwt strategy.
    console.log("Inside aith service login call");
    const payload =  {email_address: user.email_address, sub: user.id};
    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    }
  }catch(error){
    throw new Error("User does not exist");
  }
  }

  async localSignup(createUserInput: CreateUserInput){
    console.log("[Auth Service Local Signup]");
    let user = await this.usersService.findOne(createUserInput.email_address);

    if(user) {
      throw new Error('User already exists in the system!');
    }

    const password = await bcrypt.hash(createUserInput.password, 10);
    user = await this.usersService.create({...createUserInput, password});
    const payload =  {email_address: user.email_address, sub: user.id};
    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    }
  }
}