import {QueryResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";
import {UserInputError} from "apollo-server";

export const project: QueryResolvers['project'] = async (parent, args, ctx: any) => {
    const project = await prisma.project.findUnique({ where: { id: args.id } })
    if (!project) throw new UserInputError(`No profile id = ${args.id}`)
    ctx.projectId = project.id
    return project;
}
