import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({ 
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        igoreExpiration: false,
        secretOrKey: process.env.JWT_SECRET
    });
  }

  async validate(payload: any){ 
      // get user details maybe from db.
      // Decodes the jwt payload
      return { userId: payload.sub, email: payload.email_address }
  }
}