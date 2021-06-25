import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Car{

    @Field(() => ID,{ nullable: true })
    id?: string;

    @Field({ nullable: true })
    model?: string;

    @Field({ nullable: true })
    marca?: string;

    @Field({ nullable: true })
    type?: string;

    @Field({ nullable: true })
    price?: string;

}