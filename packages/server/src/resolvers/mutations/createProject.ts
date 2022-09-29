import {MutationResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";

export const createProject: MutationResolvers['createProject'] = async (parent, args) => {
    const project = {
        id: args.id,
        name: args.name,
        developerId: args.developerId
    }
    return await prisma.project.create({ data: project })
}