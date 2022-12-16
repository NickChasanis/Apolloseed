import books from "./data/books";

const resolvers = {
    Query: {
        books: () => books,
    },
};


export { resolvers }
