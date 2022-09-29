import {ProjectResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";
import {project} from "../queries/project";
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
    developer: async (parent) => {
        if (!parent.developer?.id) throw new ApolloError('parent.developer.id required')
        const developer = await prisma.developer.findUnique({ where: { id: parent.developer.id } })
        if (!developer) throw new ApolloError(`Project without developer`)
        return developer
    }
}