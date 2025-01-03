import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Account } from "@prisma/client";
import { Request } from "express";

export const Authorized = createParamDecorator(
  (key: keyof Account, context: ExecutionContext) => {
    let account: Account;

    if (context.getType() === "http") {
      const req: Request = context.switchToHttp().getRequest();

      account = req.account;
    } else {
      const gqlContext = GqlExecutionContext.create(context).getContext();
      const req: Request = gqlContext.req;

      account = req.account;
    }

    return key ? account[key] : account;
  },
);
