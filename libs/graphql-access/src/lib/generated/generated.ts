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
};

/** Age Ranges */
export enum AgeRangeEnum {
  Adult = 'ADULT',
  Any = 'ANY',
  Infant = 'INFANT',
  MiddleSchooler = 'MIDDLE_SCHOOLER',
  Newborn = 'NEWBORN',
  PreSchooler = 'PRE_SCHOOLER',
  Teen = 'TEEN',
  Toddler = 'TODDLER',
  YoungTeen = 'YOUNG_TEEN'
}

/** Auth types */
export enum AuthEnum {
  Google = 'GOOGLE',
  Local = 'LOCAL'
}

/** Popular brand names for toys */
export enum BrandEnum {
  Barbie = 'BARBIE',
  Disney = 'DISNEY',
  FisherPrice = 'FISHER_PRICE',
  HarryPotter = 'HARRY_POTTER',
  Hasbro = 'HASBRO',
  HotWheels = 'HOT_WHEELS',
  Lego = 'LEGO',
  Lightyear = 'LIGHTYEAR',
  Marvel = 'MARVEL',
  MelissaAndDoug = 'MELISSA_AND_DOUG',
  MyLittlePony = 'MY_LITTLE_PONY',
  Other = 'OTHER',
  PawPatrol = 'PAW_PATROL',
  StarWars = 'STAR_WARS'
}

/** Condition values for toys */
export enum ConditionEnum {
  New = 'NEW',
  Used = 'USED'
}

export type CreateToyInput = {
  ageRange: AgeRangeEnum;
  author: Scalars['Float'];
  brand: BrandEnum;
  category: Scalars['String'];
  condition: ConditionEnum;
  description: Scalars['String'];
  listPrice: Scalars['Float'];
  published?: InputMaybe<Scalars['Boolean']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  createToy: Toy;
  localSignup: LoginResponse;
  login: LoginResponse;
  removeToy: Toy;
  updateToy: Toy;
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


export type MutationRemoveToyArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateToyArgs = {
  updateToyInput: UpdateToyInput;
};

export type Query = {
  __typename?: 'Query';
  publishedToys: Array<Toy>;
  toy: Toy;
  toys: Array<Toy>;
  toysByAuthor: Array<Toy>;
  uptime: Scalars['Float'];
  user: User;
  users: Array<User>;
};


export type QueryPublishedToysArgs = {
  published: Scalars['Boolean'];
};


export type QueryToyArgs = {
  id: Scalars['Int'];
};


export type QueryToysByAuthorArgs = {
  author: Scalars['Float'];
};


export type QueryUserArgs = {
  email_address: Scalars['String'];
};

export type Toy = {
  __typename?: 'Toy';
  ageRange: AgeRangeEnum;
  author: Scalars['Float'];
  brand: BrandEnum;
  category: Scalars['String'];
  condition: ConditionEnum;
  description: Scalars['String'];
  id: Scalars['ID'];
  listPrice: Scalars['Float'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
};

export type UpdateToyInput = {
  ageRange: AgeRangeEnum;
  author: Scalars['Float'];
  brand: BrandEnum;
  category: Scalars['String'];
  condition: ConditionEnum;
  description: Scalars['String'];
  id: Scalars['ID'];
  listPrice: Scalars['Float'];
  published?: InputMaybe<Scalars['Boolean']>;
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


export type ToysQuery = { __typename?: 'Query', toys: Array<{ __typename?: 'Toy', id: string, title: string, description: string, category: string, listPrice: number, brand: BrandEnum, ageRange: AgeRangeEnum, condition: ConditionEnum, published: boolean, author: number }> };

export type PublishedToysQueryVariables = Exact<{
  published: Scalars['Boolean'];
}>;


export type PublishedToysQuery = { __typename?: 'Query', publishedToys: Array<{ __typename?: 'Toy', id: string, title: string, description: string, category: string, listPrice: number, brand: BrandEnum, ageRange: AgeRangeEnum, condition: ConditionEnum, published: boolean, author: number }> };

export type ToysByAuthorQueryVariables = Exact<{
  author: Scalars['Float'];
}>;


export type ToysByAuthorQuery = { __typename?: 'Query', toysByAuthor: Array<{ __typename?: 'Toy', id: string, title: string, description: string, category: string, listPrice: number, brand: BrandEnum, ageRange: AgeRangeEnum, condition: ConditionEnum, published: boolean, author: number }> };

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


export type CreateToyMutation = { __typename?: 'Mutation', createToy: { __typename?: 'Toy', id: string } };

export type RemoveToyMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveToyMutation = { __typename?: 'Mutation', removeToy: { __typename?: 'Toy', id: string, author: number } };


export const ToysDocument = gql`
    query toys {
  toys {
    id
    title
    description
    category
    listPrice
    brand
    ageRange
    condition
    published
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
export const PublishedToysDocument = gql`
    query publishedToys($published: Boolean!) {
  publishedToys(published: $published) {
    id
    title
    description
    category
    listPrice
    brand
    ageRange
    condition
    published
    author
  }
}
    `;

/**
 * __usePublishedToysQuery__
 *
 * To run a query within a React component, call `usePublishedToysQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublishedToysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublishedToysQuery({
 *   variables: {
 *      published: // value for 'published'
 *   },
 * });
 */
export function usePublishedToysQuery(baseOptions: Apollo.QueryHookOptions<PublishedToysQuery, PublishedToysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublishedToysQuery, PublishedToysQueryVariables>(PublishedToysDocument, options);
      }
export function usePublishedToysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublishedToysQuery, PublishedToysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublishedToysQuery, PublishedToysQueryVariables>(PublishedToysDocument, options);
        }
export type PublishedToysQueryHookResult = ReturnType<typeof usePublishedToysQuery>;
export type PublishedToysLazyQueryHookResult = ReturnType<typeof usePublishedToysLazyQuery>;
export type PublishedToysQueryResult = Apollo.QueryResult<PublishedToysQuery, PublishedToysQueryVariables>;
export const ToysByAuthorDocument = gql`
    query toysByAuthor($author: Float!) {
  toysByAuthor(author: $author) {
    id
    title
    description
    category
    listPrice
    brand
    ageRange
    condition
    published
    author
  }
}
    `;

/**
 * __useToysByAuthorQuery__
 *
 * To run a query within a React component, call `useToysByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useToysByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToysByAuthorQuery({
 *   variables: {
 *      author: // value for 'author'
 *   },
 * });
 */
export function useToysByAuthorQuery(baseOptions: Apollo.QueryHookOptions<ToysByAuthorQuery, ToysByAuthorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ToysByAuthorQuery, ToysByAuthorQueryVariables>(ToysByAuthorDocument, options);
      }
export function useToysByAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToysByAuthorQuery, ToysByAuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ToysByAuthorQuery, ToysByAuthorQueryVariables>(ToysByAuthorDocument, options);
        }
export type ToysByAuthorQueryHookResult = ReturnType<typeof useToysByAuthorQuery>;
export type ToysByAuthorLazyQueryHookResult = ReturnType<typeof useToysByAuthorLazyQuery>;
export type ToysByAuthorQueryResult = Apollo.QueryResult<ToysByAuthorQuery, ToysByAuthorQueryVariables>;
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