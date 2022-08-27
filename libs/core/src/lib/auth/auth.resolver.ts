import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { CreateUserInput } from '../users/dto/create-user.input';
import { User } from '../users/entities/user.entity';
import { LoginUserInput } from '../login/dto/login-user-input';
import { LoginResponse } from '../login/dto/login-response';
import { GqlAuthGuard } from './gql-auth.guard';
import { UseGuards } from '@nestjs/common';


@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @Mutation(returns => LoginResponse)
    @UseGuards(GqlAuthGuard)
    login(@Args('loginUserInput') loginUserInput: LoginUserInput, @Context() context) {
            return this.authService.login(context.user);
    }

    @Mutation(returns => LoginResponse)
    localSignup(@Args('createUserInput') createUserInput: CreateUserInput) {
        return this.authService.localSignup(createUserInput);
    }
}
