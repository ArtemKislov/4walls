import {DeveloperResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";

export const Developer: DeveloperResolvers = {
    projects: async (parent, args, ctx: any) => {
        return await prisma.project.findMany({
            where: {
                id: args.siblings ? { not: ctx.projectId } : {},
                developerId: parent.id,
            } })
    }
}