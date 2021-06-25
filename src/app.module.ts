import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug:false,
      playground:true,
      autoSchemaFile:join(process.cwd(),'src/schema.gql'),
      sortSchema:true,
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    CarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
