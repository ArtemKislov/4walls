import {developers} from "./developers";
import {Developer} from "./types/Developer";
import {Resolvers} from "../resolvers-types";

const resolvers: Resolvers = {
    Query: {
        developers,
    },
    Developer
};

export default resolvers