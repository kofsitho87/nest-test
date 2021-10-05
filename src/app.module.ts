import { Module } from '@nestjs/common';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import RecipeModule from './receipe/receipe.module';

@Module({
  // imports: [
  //   TypeGraphQLModule.forRoot({
  //     cors: true,
  //     debug: true,
  //     playground: true,
  //     validate: false,
  //     context: ({ req }) => ({ currentUser: req.user }),
  //   }),
  //   RecipeModule,
  // ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
