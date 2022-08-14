import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ToysService } from './toys.service'
import { Toy } from './entities/toy.entity'
import { CreateToyInput } from './dto/create-toy.input'
import { UpdateToyInput } from './dto/update-toy.input'
import { UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ToyStatusEnum } from './enums/ToyStatusEnum'

@Resolver(() => Toy)
export class ToysResolver {
  constructor(private readonly toysService: ToysService) {}

  @Mutation(() => Toy)
  async createToy(@Args('createToyInput') createToyInput: CreateToyInput): Promise<Toy> {
    console.log("[TOY Resolver CREATE TOY]: ", createToyInput);
    const toy = await this.toysService.create(createToyInput);
    return toy;
  }

  @Query(() => [Toy], { name: 'toys' })
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.toysService.findAll()
  }

  @Query(returns => [Toy])
  findAllByStatus(
    @Args('saleStatus', { type: () => ToyStatusEnum }) saleStatus: ToyStatusEnum) {
    return this.toysService.findAllByStatus(saleStatus);
  }

  @Query(returns => [Toy])
  findAllByAuthor(@Args('author') author: number) {
    return this.toysService.findAllByAuthor(author);
  }

  @Query(() => Toy, { name: 'toy' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.toysService.findOne(id)
  }

  @Mutation(() => Toy)
  updateToy(@Args('updateToyInput') updateToyInput: UpdateToyInput) {
    return this.toysService.update(updateToyInput.id, updateToyInput)
  }

  @Mutation(() => Toy)
  removeToy(@Args('id', { type: () => Int }) id: number) {
    return this.toysService.remove(id)
  }
}
