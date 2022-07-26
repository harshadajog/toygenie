import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { configuration } from "./config/configuration";
import { validationSchema } from "./config/validation";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CoreResolver } from "./core.resolver";
import { ToysModule } from './toys/toys.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './schema.gql',
      debug: true,
      playground: true,
    }),
    ToysModule, UsersModule, AuthModule,
  ],
  controllers: [],
  providers: [CoreResolver],
  exports: [],
})
export class CoreModule {}
