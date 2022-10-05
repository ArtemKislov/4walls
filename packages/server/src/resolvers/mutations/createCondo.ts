import {MutationResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";

export const createCondo: MutationResolvers['createCondo'] = async (parent, args) => {
    const project = {
        id: args.id,
        floors: args.floors,
        projectId: args.projectId,
        elevator: args.elevator
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
            Condo: {
                create: {
                    id: project.id,
                    elevator: project.elevator
                }
            }
        }
    })
}