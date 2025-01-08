import { AccountModule } from "@modules/account/account.module";
import { AuthModule } from "@modules/auth/auth.module";
import { MailerModule } from "@modules/mailer/mailer.module";
import { ResetPasswordModule } from "@modules/reset-password/reset-password.module";
import { SessionModule } from "@modules/session/session.module";
import { TokenModule } from "@modules/token/token.module";
import { UserModule } from "@modules/user/user.module";
import { VerificationEmailModule } from "@modules/verification-email/verification-email.module";

import { ApolloDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

import { getGraphQLConfig } from "./configs/graphql.config";
import { EnvironmentModule } from "./environment/environment.module";
import { PrismaModule } from "./prisma/prisma.module";
import { RedisModule } from "./redis/redis.module";

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: getGraphQLConfig,
    }),
    EnvironmentModule,
    PrismaModule,
    RedisModule,
    //
    AccountModule,
    AuthModule,
    MailerModule,
    ResetPasswordModule,
    SessionModule,
    TokenModule,
    UserModule,
    VerificationEmailModule,
  ],
})
export class AppModule {}
