import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { MessagingService } from './messaging.service'
import { Messaging } from './entities/messaging.entity'
import { CreateMessagingInput } from './dto/create-messaging.input'
import { readFileSync, writeFileSync } from 'fs';

@Resolver(() => Messaging)
export class MessagingResolver {
  constructor(private readonly messagingService: MessagingService) {}

  @Mutation(() => Messaging)
  async createMessage(@Args('createMessagingInput') createMessagingInput: CreateMessagingInput): Promise<Messaging> {
    console.log("[Messaging Resolver CREATE MESSAGE]: ", createMessagingInput);
    const newMessage = await this.messagingService.create(createMessagingInput)
    return newMessage;
  }

  @Query(() => [Messaging], { name: 'messages' })
  findAll() {
    return this.messagingService.findAll()
  }

  @Query(returns => [Messaging])
  findMessagesReceivedByUser(@Args('recepient') recepient: number) {
    return this.messagingService.findMessagesReceivedByUser(recepient);
  }

  @Query(returns => [Messaging], { name: 'unreadMessages' })
  findUnreadMessagesReceivedByUser(@Args('recepient') recepient: number) {
    return this.messagingService.findUnreadMessagesReceivedByUser(recepient);
  }

  @Query(() => Messaging, { name: 'messaging' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.messagingService.findOne(id)
  }

  @Mutation(() => Messaging)
  removeMessaging(@Args('id', { type: () => Int }) id: number) {
    return this.messagingService.remove(id)
  }
}
