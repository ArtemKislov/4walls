import {QueryResolvers} from "../resolvers-types";
import {prisma} from "../prisma";

export const developers: QueryResolvers['developers'] = () => prisma.developer.findMany()
