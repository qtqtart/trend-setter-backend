import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Project } from "@prisma/client";
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

@ObjectType()
export class ProjectModel implements Project {
  @Field(() => ID)
  @IsString()
  @IsNotEmpty()
  public id: string;

  @Field(() => Date)
  @IsDate()
  public createdAt: Date;

  @Field(() => Date)
  @IsDate()
  public updatedAt: Date;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public title: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsOptional()
  @IsString()
  public description: string;

  @Field(() => Boolean)
  @IsBoolean()
  public isArchived: boolean;

  @Field(() => String, {
    nullable: true,
  })
  @IsOptional()
  @IsString()
  public previewUrl: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public creatorId: string;
}
