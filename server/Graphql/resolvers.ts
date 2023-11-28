import books from "./data/books.js";

const resolvers = {
    Query: {
        books: () => books,
    },
};


export { resolvers }
