import {ProjectResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";
import {ApolloError} from "apollo-server";

export const Project: ProjectResolvers = {
    buildings: async (parent, args) => {
        const buildings = await prisma.building.findMany({ where: { projectId: parent.id }, include: {
            Condo: true,
            SFHome: true
        } })
        return buildings.map(building => ({
            ...building,
            ...building.Condo,
            ...building.SFHome
        }))
    },
    developer: async (parent, args, context) => {
        if (!parent.id) throw new ApolloError('Parent.id is required');
        const project = await context.dataloaders.project.load(parent.id)
        if (!project) throw new ApolloError('project required')
        const developer = await prisma.developer.findUnique({ where: { id: project.developerId } })
        if (!developer) throw new ApolloError(`Project without developer`)
        return developer
    }
}