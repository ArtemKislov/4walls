import {MutationResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";

export const createSFHome: MutationResolvers['createSFHome'] = async (parent, args) => {
    const project = {
        id: args.id,
        floors: args.floors,
        projectId: args.projectId,
        chimney: args.chimney,
        area: args.area,
    }
    return await prisma.building.create({
        data: {
            id: project.id,
            project: {
                connect: {
                    id: project.projectId
                }
            },
            address: {
                create: {
                    line1: 'line1',
                    line2: 'line2',
                    city: 'London',
                    country: 'UK',
                    state: 'LD'
                }
            },
            floors: project.floors,
            SFHome: {
                create: {
                    id: project.id,
                    chimney: project.chimney,
                    area: project.area
                }
            }
        }
    })
}