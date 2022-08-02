import { gql } from '@apollo/client';

export const GET_PUBLISHED_TOYS = gql`
query publishedToys($published: Boolean!)  {
    publishedToys(published: $published){
      id
      title
      description
      category
      listPrice
      condition
      published
      author
    }
  }  
`

// export const CREATE_TOY = gql`
// mutation addToy (
//         $title: String!
//         $description: String!
//         $listPrice: Float!
//         $condition: String!
//         $category: String!
//         $author: Float!
//         $published: boolean!
//    ){
//     createToy(createToyInput: $input) {
//         id
//       }
//    }
// `
