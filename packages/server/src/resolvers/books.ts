import {QueryResolvers} from "../resolvers-types";

const bookss = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

export const books: QueryResolvers['books'] = () => bookss
