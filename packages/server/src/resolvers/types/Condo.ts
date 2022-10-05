import {CondoResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";

export const Condo: CondoResolvers = {
    apartments: async (parent, args) => {
        const { state } = args
        return await prisma.apartment.findMany({
            where: {
                condoId: parent.id,
                ...(state && { state })
            },
        })
    }
}