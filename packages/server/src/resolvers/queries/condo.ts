import {QueryResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";
import {UserInputError} from "apollo-server";

export const condo: QueryResolvers['condo'] = async (parent, args) => {
    const condo = await prisma.condo.findUnique({
        where: { id: args.id },
        include: {
            building: true
        }
    })
    if (!condo) throw new UserInputError(`No condo id = ${args.id}`)
    return {
        ...condo,
        floors: condo.building.floors
    };
}
