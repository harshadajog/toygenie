import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ToysService } from './toys.service'
import { Toy } from './entities/toy.entity'
import { CreateToyInput } from './dto/create-toy.input'
import { UpdateToyInput } from './dto/update-toy.input'

@Resolver(() => Toy)
export class ToysResolver {
  constructor(private readonly toysService: ToysService) {}

  @Mutation(() => Toy)
  createToy(@Args('createToyInput') createToyInput: CreateToyInput) {
    console.log("[TOY Resolver CREATE TOY] ");
    return this.toysService.create(createToyInput)
  }

  @Query(() => [Toy], { name: 'toys' })
  findAll() {
    return this.toysService.findAll()
  }

  @Query(returns => [Toy])
  publishedToys(@Args('published', { type: () => Boolean }) published: boolean) {
    return this.toysService.findAllPublished(published);
  }

  @Query(returns => [Toy])
  toysByAuthor(@Args('author') author: number) {
    return this.toysService.findByAuthor(author);
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
