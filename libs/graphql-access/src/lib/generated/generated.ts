import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

/** Auth types */
export enum AuthEnum {
  Google = 'GOOGLE',
  Local = 'LOCAL'
}

/** Condition values for toys */
export enum ConditionEnum {
  New = 'NEW',
  Used = 'USED'
}

export type CreateMessagingInput = {
  created_date: Scalars['DateTime'];
  creator_id: Scalars['Float'];
  is_read: Scalars['Boolean'];
  messageBody: Scalars['String'];
  parent_message_id: Scalars['Float'];
  recipient_id: Scalars['Float'];
  subject: Scalars['String'];
};

export type CreateToyInput = {
  author: Scalars['Float'];
  category: Scalars['String'];
  condition: ConditionEnum;
  description: Scalars['String'];
  listPrice: Scalars['Float'];
  saleStatus: ToyStatusEnum;
  title: Scalars['String'];
};

export type CreateUserInput = {
  email_address: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  roles?: InputMaybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  user: User;
};

export type LoginUserInput = {
  auth_type: AuthEnum;
  email_address: Scalars['String'];
  password: Scalars['String'];
};

export type Messaging = {
  __typename?: 'Messaging';
  created_date: Scalars['DateTime'];
  creator_id: Scalars['Float'];
  id: Scalars['ID'];
  is_read: Scalars['Boolean'];
  messageBody: Scalars['String'];
  parent_message_id: Scalars['Float'];
  recipient_id: Scalars['Float'];
  subject: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: Messaging;
  createToy: Toy;
  localSignup: LoginResponse;
  login: LoginResponse;
  removeMessaging: Messaging;
  removeToy: Toy;
  updateToy: Toy;
};


export type MutationCreateMessageArgs = {
  createMessagingInput: CreateMessagingInput;
};


export type MutationCreateToyArgs = {
  createToyInput: CreateToyInput;
};


export type MutationLocalSignupArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveMessagingArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveToyArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateToyArgs = {
  updateToyInput: UpdateToyInput;
};

export type Query = {
  __typename?: 'Query';
  findAllByAuthor: Array<Toy>;
  findAllByStatus: Array<Toy>;
  findMessagesReceivedByUser: Array<Messaging>;
  messages: Array<Messaging>;
  messaging: Messaging;
  toy: Toy;
  toys: Array<Toy>;
  unreadMessages: Array<Messaging>;
  uptime: Scalars['Float'];
  user: User;
  userById: User;
  users: Array<User>;
};


export type QueryFindAllByAuthorArgs = {
  author: Scalars['Float'];
};


export type QueryFindAllByStatusArgs = {
  saleStatus: ToyStatusEnum;
};


export type QueryFindMessagesReceivedByUserArgs = {
  recepient: Scalars['Float'];
};


export type QueryMessagingArgs = {
  id: Scalars['Int'];
};


export type QueryToyArgs = {
  id: Scalars['Int'];
};


export type QueryUnreadMessagesArgs = {
  recepient: Scalars['Float'];
};


export type QueryUserArgs = {
  email_address: Scalars['String'];
};


export type QueryUserByIdArgs = {
  id: Scalars['Float'];
};

export type Toy = {
  __typename?: 'Toy';
  author: Scalars['Float'];
  category: Scalars['String'];
  condition: ConditionEnum;
  description: Scalars['String'];
  id: Scalars['ID'];
  listPrice: Scalars['Float'];
  saleStatus: ToyStatusEnum;
  title: Scalars['String'];
};

/** Sale status for the toy */
export enum ToyStatusEnum {
  Active = 'ACTIVE',
  Disapproved = 'DISAPPROVED',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Sold = 'SOLD'
}

export type UpdateToyInput = {
  author: Scalars['Float'];
  category: Scalars['String'];
  condition: ConditionEnum;
  description: Scalars['String'];
  id: Scalars['ID'];
  listPrice: Scalars['Float'];
  saleStatus: ToyStatusEnum;
  title: Scalars['String'];
};

/** user  */
export type User = {
  __typename?: 'User';
  email_address: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  roles: Scalars['String'];
};

export type ToysQueryVariables = Exact<{ [key: string]: never; }>;


export type ToysQuery = { __typename?: 'Query', toys: Array<{ __typename?: 'Toy', id: string, title: string, description: string, category: string, listPrice: number, condition: ConditionEnum, author: number }> };

export type FindAllByStatusQueryVariables = Exact<{
  saleStatus: ToyStatusEnum;
}>;


export type FindAllByStatusQuery = { __typename?: 'Query', findAllByStatus: Array<{ __typename?: 'Toy', id: string, title: string, description: string, category: string, listPrice: number, condition: ConditionEnum, author: number, saleStatus: ToyStatusEnum }> };

export type FindAllByAuthorQueryVariables = Exact<{
  author: Scalars['Float'];
}>;


export type FindAllByAuthorQuery = { __typename?: 'Query', findAllByAuthor: Array<{ __typename?: 'Toy', id: string, title: string, description: string, category: string, listPrice: number, condition: ConditionEnum, author: number, saleStatus: ToyStatusEnum }> };

export type FindUserByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type FindUserByIdQuery = { __typename?: 'Query', userById: { __typename?: 'User', first_name: string, last_name: string, email_address: string } };

export type FindUnreadMessagesReceivedByUserQueryVariables = Exact<{
  recepient: Scalars['Float'];
}>;


export type FindUnreadMessagesReceivedByUserQuery = { __typename?: 'Query', unreadMessages: Array<{ __typename?: 'Messaging', id: string, parent_message_id: number, subject: string, messageBody: string, creator_id: number, recipient_id: number, is_read: boolean }> };

export type LocalSignupMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type LocalSignupMutation = { __typename?: 'Mutation', localSignup: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', id: number, first_name: string, last_name: string, email_address: string } } };

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', id: number, first_name: string, last_name: string, email_address: string } } };

export type CreateToyMutationVariables = Exact<{
  input: CreateToyInput;
}>;


export type CreateToyMutation = { __typename?: 'Mutation', createToy: { __typename?: 'Toy', id: string, title: string, description: string, category: string, listPrice: number, condition: ConditionEnum, author: number, saleStatus: ToyStatusEnum } };

export type RemoveToyMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveToyMutation = { __typename?: 'Mutation', removeToy: { __typename?: 'Toy', id: string, author: number } };

export type CreatemessageMutationVariables = Exact<{
  input: CreateMessagingInput;
}>;


export type CreatemessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Messaging', id: string, parent_message_id: number, subject: string, messageBody: string, created_date: any, creator_id: number, recipient_id: number, is_read: boolean } };


export const ToysDocument = gql`
    query toys {
  toys {
    id
    title
    description
    category
    listPrice
    condition
    author
  }
}
    `;

/**
 * __useToysQuery__
 *
 * To run a query within a React component, call `useToysQuery` and pass it any options that fit your needs.
 * When your component renders, `useToysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToysQuery({
 *   variables: {
 *   },
 * });
 */
export function useToysQuery(baseOptions?: Apollo.QueryHookOptions<ToysQuery, ToysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ToysQuery, ToysQueryVariables>(ToysDocument, options);
      }
export function useToysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToysQuery, ToysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ToysQuery, ToysQueryVariables>(ToysDocument, options);
        }
export type ToysQueryHookResult = ReturnType<typeof useToysQuery>;
export type ToysLazyQueryHookResult = ReturnType<typeof useToysLazyQuery>;
export type ToysQueryResult = Apollo.QueryResult<ToysQuery, ToysQueryVariables>;
export const FindAllByStatusDocument = gql`
    query findAllByStatus($saleStatus: ToyStatusEnum!) {
  findAllByStatus(saleStatus: $saleStatus) {
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
    `;

/**
 * __useFindAllByStatusQuery__
 *
 * To run a query within a React component, call `useFindAllByStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllByStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllByStatusQuery({
 *   variables: {
 *      saleStatus: // value for 'saleStatus'
 *   },
 * });
 */
export function useFindAllByStatusQuery(baseOptions: Apollo.QueryHookOptions<FindAllByStatusQuery, FindAllByStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllByStatusQuery, FindAllByStatusQueryVariables>(FindAllByStatusDocument, options);
      }
export function useFindAllByStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllByStatusQuery, FindAllByStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllByStatusQuery, FindAllByStatusQueryVariables>(FindAllByStatusDocument, options);
        }
export type FindAllByStatusQueryHookResult = ReturnType<typeof useFindAllByStatusQuery>;
export type FindAllByStatusLazyQueryHookResult = ReturnType<typeof useFindAllByStatusLazyQuery>;
export type FindAllByStatusQueryResult = Apollo.QueryResult<FindAllByStatusQuery, FindAllByStatusQueryVariables>;
export const FindAllByAuthorDocument = gql`
    query findAllByAuthor($author: Float!) {
  findAllByAuthor(author: $author) {
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
    `;

/**
 * __useFindAllByAuthorQuery__
 *
 * To run a query within a React component, call `useFindAllByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllByAuthorQuery({
 *   variables: {
 *      author: // value for 'author'
 *   },
 * });
 */
export function useFindAllByAuthorQuery(baseOptions: Apollo.QueryHookOptions<FindAllByAuthorQuery, FindAllByAuthorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllByAuthorQuery, FindAllByAuthorQueryVariables>(FindAllByAuthorDocument, options);
      }
export function useFindAllByAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllByAuthorQuery, FindAllByAuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllByAuthorQuery, FindAllByAuthorQueryVariables>(FindAllByAuthorDocument, options);
        }
export type FindAllByAuthorQueryHookResult = ReturnType<typeof useFindAllByAuthorQuery>;
export type FindAllByAuthorLazyQueryHookResult = ReturnType<typeof useFindAllByAuthorLazyQuery>;
export type FindAllByAuthorQueryResult = Apollo.QueryResult<FindAllByAuthorQuery, FindAllByAuthorQueryVariables>;
export const FindUserByIdDocument = gql`
    query findUserById($id: Float!) {
  userById(id: $id) {
    first_name
    last_name
    email_address
  }
}
    `;

/**
 * __useFindUserByIdQuery__
 *
 * To run a query within a React component, call `useFindUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindUserByIdQuery(baseOptions: Apollo.QueryHookOptions<FindUserByIdQuery, FindUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, options);
      }
export function useFindUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserByIdQuery, FindUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, options);
        }
export type FindUserByIdQueryHookResult = ReturnType<typeof useFindUserByIdQuery>;
export type FindUserByIdLazyQueryHookResult = ReturnType<typeof useFindUserByIdLazyQuery>;
export type FindUserByIdQueryResult = Apollo.QueryResult<FindUserByIdQuery, FindUserByIdQueryVariables>;
export const FindUnreadMessagesReceivedByUserDocument = gql`
    query findUnreadMessagesReceivedByUser($recepient: Float!) {
  unreadMessages(recepient: $recepient) {
    id
    parent_message_id
    subject
    messageBody
    creator_id
    recipient_id
    is_read
  }
}
    `;

/**
 * __useFindUnreadMessagesReceivedByUserQuery__
 *
 * To run a query within a React component, call `useFindUnreadMessagesReceivedByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUnreadMessagesReceivedByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUnreadMessagesReceivedByUserQuery({
 *   variables: {
 *      recepient: // value for 'recepient'
 *   },
 * });
 */
export function useFindUnreadMessagesReceivedByUserQuery(baseOptions: Apollo.QueryHookOptions<FindUnreadMessagesReceivedByUserQuery, FindUnreadMessagesReceivedByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUnreadMessagesReceivedByUserQuery, FindUnreadMessagesReceivedByUserQueryVariables>(FindUnreadMessagesReceivedByUserDocument, options);
      }
export function useFindUnreadMessagesReceivedByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUnreadMessagesReceivedByUserQuery, FindUnreadMessagesReceivedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUnreadMessagesReceivedByUserQuery, FindUnreadMessagesReceivedByUserQueryVariables>(FindUnreadMessagesReceivedByUserDocument, options);
        }
export type FindUnreadMessagesReceivedByUserQueryHookResult = ReturnType<typeof useFindUnreadMessagesReceivedByUserQuery>;
export type FindUnreadMessagesReceivedByUserLazyQueryHookResult = ReturnType<typeof useFindUnreadMessagesReceivedByUserLazyQuery>;
export type FindUnreadMessagesReceivedByUserQueryResult = Apollo.QueryResult<FindUnreadMessagesReceivedByUserQuery, FindUnreadMessagesReceivedByUserQueryVariables>;
export const LocalSignupDocument = gql`
    mutation localSignup($input: CreateUserInput!) {
  localSignup(createUserInput: $input) {
    user {
      id
      first_name
      last_name
      email_address
    }
    access_token
  }
}
    `;
export type LocalSignupMutationFn = Apollo.MutationFunction<LocalSignupMutation, LocalSignupMutationVariables>;

/**
 * __useLocalSignupMutation__
 *
 * To run a mutation, you first call `useLocalSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLocalSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [localSignupMutation, { data, loading, error }] = useLocalSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLocalSignupMutation(baseOptions?: Apollo.MutationHookOptions<LocalSignupMutation, LocalSignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LocalSignupMutation, LocalSignupMutationVariables>(LocalSignupDocument, options);
      }
export type LocalSignupMutationHookResult = ReturnType<typeof useLocalSignupMutation>;
export type LocalSignupMutationResult = Apollo.MutationResult<LocalSignupMutation>;
export type LocalSignupMutationOptions = Apollo.BaseMutationOptions<LocalSignupMutation, LocalSignupMutationVariables>;
export const LoginDocument = gql`
    mutation login($input: LoginUserInput!) {
  login(loginUserInput: $input) {
    user {
      id
      first_name
      last_name
      email_address
    }
    access_token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateToyDocument = gql`
    mutation createToy($input: CreateToyInput!) {
  createToy(createToyInput: $input) {
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
    `;
export type CreateToyMutationFn = Apollo.MutationFunction<CreateToyMutation, CreateToyMutationVariables>;

/**
 * __useCreateToyMutation__
 *
 * To run a mutation, you first call `useCreateToyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateToyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createToyMutation, { data, loading, error }] = useCreateToyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateToyMutation(baseOptions?: Apollo.MutationHookOptions<CreateToyMutation, CreateToyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateToyMutation, CreateToyMutationVariables>(CreateToyDocument, options);
      }
export type CreateToyMutationHookResult = ReturnType<typeof useCreateToyMutation>;
export type CreateToyMutationResult = Apollo.MutationResult<CreateToyMutation>;
export type CreateToyMutationOptions = Apollo.BaseMutationOptions<CreateToyMutation, CreateToyMutationVariables>;
export const RemoveToyDocument = gql`
    mutation removeToy($id: Int!) {
  removeToy(id: $id) {
    id
    author
  }
}
    `;
export type RemoveToyMutationFn = Apollo.MutationFunction<RemoveToyMutation, RemoveToyMutationVariables>;

/**
 * __useRemoveToyMutation__
 *
 * To run a mutation, you first call `useRemoveToyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveToyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeToyMutation, { data, loading, error }] = useRemoveToyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveToyMutation(baseOptions?: Apollo.MutationHookOptions<RemoveToyMutation, RemoveToyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveToyMutation, RemoveToyMutationVariables>(RemoveToyDocument, options);
      }
export type RemoveToyMutationHookResult = ReturnType<typeof useRemoveToyMutation>;
export type RemoveToyMutationResult = Apollo.MutationResult<RemoveToyMutation>;
export type RemoveToyMutationOptions = Apollo.BaseMutationOptions<RemoveToyMutation, RemoveToyMutationVariables>;
export const CreatemessageDocument = gql`
    mutation createmessage($input: CreateMessagingInput!) {
  createMessage(createMessagingInput: $input) {
    id
    parent_message_id
    subject
    messageBody
    created_date
    creator_id
    recipient_id
    is_read
  }
}
    `;
export type CreatemessageMutationFn = Apollo.MutationFunction<CreatemessageMutation, CreatemessageMutationVariables>;

/**
 * __useCreatemessageMutation__
 *
 * To run a mutation, you first call `useCreatemessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatemessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createmessageMutation, { data, loading, error }] = useCreatemessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatemessageMutation(baseOptions?: Apollo.MutationHookOptions<CreatemessageMutation, CreatemessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatemessageMutation, CreatemessageMutationVariables>(CreatemessageDocument, options);
      }
export type CreatemessageMutationHookResult = ReturnType<typeof useCreatemessageMutation>;
export type CreatemessageMutationResult = Apollo.MutationResult<CreatemessageMutation>;
export type CreatemessageMutationOptions = Apollo.BaseMutationOptions<CreatemessageMutation, CreatemessageMutationVariables>;