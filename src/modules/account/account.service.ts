import { PrismaService } from "@app/prisma/prisma.service";

import { Injectable } from "@nestjs/common";

@Injectable()
export class AccountService {
  public constructor(private readonly _prismaService: PrismaService) {}

  public async findMe(id: string) {
    const user = await this._prismaService.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
}
