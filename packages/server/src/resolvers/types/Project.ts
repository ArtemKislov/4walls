import {ProjectResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";

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
    }
}