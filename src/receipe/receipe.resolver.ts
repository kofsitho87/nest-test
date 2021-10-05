import { Injectable } from '@nestjs/common';
import { Query, Resolver } from 'type-graphql';

@Injectable()
@Resolver()
export default class RecipeResolver {
  @Query(() => String)
  async product() {
    return 'test';
  }
}
