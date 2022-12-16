import gql from 'graphql-tag';

// noinspection GraphQLTypeRedefinition
const typeDefs = gql `
type Book {
    title: String
    author: String
}
 type Query {
    books: [Book]
}
`;


export { typeDefs }
