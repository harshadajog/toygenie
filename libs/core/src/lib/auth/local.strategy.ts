import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email_address' });
  }

  async validate(email: string, password: string): Promise<any> {
    console.log("[Local Strategy - Validate] ");
      let user = await this.authService.validateUser(email, password);
      if (!user) {
        throw new Error('User does not exist in the system!');
      }
      return user;
  }
}