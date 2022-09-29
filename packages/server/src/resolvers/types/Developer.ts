import {DeveloperResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";

export const Developer: DeveloperResolvers = {
    projects: async (parent, args) => {
        return await prisma.project.findMany({ where: { developerId: parent.id } })
    }
}