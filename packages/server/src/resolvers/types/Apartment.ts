import {ApartmentResolvers} from "../../resolvers-types";
import {ApolloError} from "apollo-server";

export const Apartment: ApartmentResolvers = {
    priceMerMeter: async (parent) => {
        const { price, area } = parent
        if (typeof price === 'undefined' || typeof area === 'undefined') throw new ApolloError('price and area required for this field')
        return Math.floor(price / area)
    }
}