import {MutationResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";

export const bookApartment: MutationResolvers['bookApartment'] = async (parent, args) => {
    await prisma.apartment.update({
        where: { id: args.id },
        data: { state: 'RESERVED' }
    })
    return true
}