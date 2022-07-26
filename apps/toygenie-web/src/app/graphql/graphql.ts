import { gql } from '@apollo/client';

export const GET_TOYS_FOR_SALE = gql`
query findAllByStatus($saleStatus: ToyStatusEnum!)  {
  findAllByStatus(saleStatus: $saleStatus){
    id
    title
    description
    category
    listPrice
    condition
    author
    saleStatus
  }
}
`
export const GET_TOYS_BY_AUTHOR = gql`
query  findAllByAuthor($author: Float!)  {
  findAllByAuthor(author: $author ){
    id
    title
    description
    category
    listPrice
    condition
    author
    saleStatus
  }
}
`

// export const CREATE_MESSAGE = gql`
// mutation createmessage($input: CreateMessagingInput!){
//   createMessage(createMessagingInput: $input) {
// 		id
//     subject
//     messageBody
//     created_date
//     creator_id
//     parent_message_id
//   }
//   }
// `

export const GET_MESSAGES_BY_RECEPIENT = gql`
query findMessagesReceivedByUser($recepient: Float!)  {
  findMessagesReceivedByUser(recepient: $recepient){
    id
    subject
    messageBody
  }
}
`

export const GET_UNREAD_BY_RECEPIENT = gql`
query findunreadMessagesForUser($recepient: Float!)  {
  unreadMessages(recepient: $recepient){
    subject
    messageBody
    creator_id
    recipient_id
    is_read
  }
}
`

export const GET_USER_BY_ID = gql`
query findUserById ($id: Float!) {
  userById(id: $id) {
    first_name
    last_name
    email_address
  }
}
`

export const GET_TOYS_FOR_SALE_EXC_USR = gql`
query  findToysForSaleExcludingCurrentUser($saleStatus: ToyStatusEnum!, $userid: Float!)  {
  findToysForSaleExcludingCurrentUser(saleStatus: $saleStatus, userid: $userid, ){
    id
    title
    description
    category
    listPrice
    condition
    author
    saleStatus
  }
}
`