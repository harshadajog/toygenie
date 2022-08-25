import { Resolver, Query, Mutation, Args, Int} from '@nestjs/graphql'
import { MessagingService } from './messaging.service'
import { Messaging } from './entities/messaging.entity';
import { ChatMessage } from './entities/chat-message.entity';
import { Conversation } from './entities/conversation.entity';
import { CreateMessagingInput } from './dto/create-messaging.input';
import { CreateChatMessageInput } from './dto/create-chatmessage.input';
import { CreateConversationInput } from './dto/create-conversation.input';
import { UpdateConversationInput } from './dto/update-conversation.input';
import { readFileSync, writeFileSync } from 'fs';

@Resolver()
export class MessagingResolver {
  constructor(private readonly messagingService: MessagingService) {}

  @Mutation(() => Conversation)
  async createConversation(@Args('createConversationInput') createConversationInput: CreateConversationInput): Promise<Conversation> {
    console.log("[Messaging Resolver CREATE CONVERSATION]: ", createConversationInput);
    const newConv = await this.messagingService.createConversation(createConversationInput);
    return newConv;
  }

  @Mutation(() => Conversation)
  async updateConversation(@Args('updateConversationInput') updateConversationInput: UpdateConversationInput): Promise<Conversation> {
    console.log("[Messaging Resolver UPDATE CONVERSATION]: ", updateConversationInput);
    const newConv = await this.messagingService.updateConversation(updateConversationInput);
    return newConv;
  }

  // @Mutation(() => Messaging)
  // async createMessage(@Args('createMessagingInput') createMessagingInput: CreateMessagingInput): Promise<Messaging> {
  //   console.log("[Messaging Resolver CREATE MESSAGE]: ", createMessagingInput);
  //   const newMessage = await this.messagingService.create(createMessagingInput)
  //   return newMessage;
  // }

  @Query(() => [Messaging], { name: 'messages' })
  findAll() {
    return this.messagingService.findAll()
  }

  @Query(returns => Int, { name: 'findConversationId' })
  findConversationId(@Args('userid1') userid1: number,
                     @Args('userid2') userid2: number){
    return this.messagingService.findConversationId(userid1, userid2);
  }

  @Query(returns => Conversation, { name: 'findConversation' })
  findConversation(@Args('userid1') userid1: number,
                     @Args('userid2') userid2: number){
    return this.messagingService.findConversation(userid1, userid2);
  }

  // @Query(returns => [ChatMessage])
  // findMessagesReceivedByUser(@Args('recepient') recepient: number) {
  //   return this.messagingService.findMessagesReceivedByUser(recepient);
  // }

  @Query(returns => [ChatMessage], { name: 'unreadMessages' })
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
