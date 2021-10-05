import { Module } from '@nestjs/common';
import RecipeResolver from './receipe.resolver';

@Module({
  providers: [RecipeResolver],
})
export default class RecipeModule {}
