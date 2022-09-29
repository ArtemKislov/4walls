import {ApolloServer} from 'apollo-server';
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import {createContext} from "./context";


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext,
    csrfPrevention: true,
    cache: 'bounded',
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});