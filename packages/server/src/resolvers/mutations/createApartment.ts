import {MutationResolvers} from "../../resolvers-types";
import {prisma} from "../../prisma";

export const createApartment: MutationResolvers['createApartment'] = async (parent, args) => {
    const apartment = {
        id: args.id,
        floor: args.floor,
        condoId: args.condoId,
        price: args.price,
        area: args.area,
        rooms: args.rooms,
    }
    return await prisma.apartment.create({
        data: {
            id: apartment.id,
            price: apartment.price,
            floor: apartment.floor,
            area: apartment.area,
            rooms: apartment.rooms,
            state: 'AVAILABLE',
            condo: {
                connect: {
                    id: apartment.condoId
                }
            }
        }
    })
}