import {MutationResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";

export const createDeveloper: MutationResolvers['createDeveloper'] = async (parent, args) => {
    const developer = {
        id: args.id,
        name: args.name
    }
    return await prisma.developer.create({ data: developer })
}