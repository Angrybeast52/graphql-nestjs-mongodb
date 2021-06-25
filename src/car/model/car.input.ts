import { Field, InputType} from '@nestjs/graphql';

@InputType()
export class CarInput{
    @Field({ nullable: true })
    model?: string;

    @Field({ nullable: true })
    marca?: string;

    @Field({ nullable: true })
    type?: string;

    @Field({ nullable: true })
    price?: string;
}