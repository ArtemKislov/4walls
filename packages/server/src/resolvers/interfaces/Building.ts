import {BuildingResolvers} from "../../resolvers-types";

export const Building: BuildingResolvers = {
    __resolveType(obj) {
        if ('elevator' in obj) {
            return 'Condo'
        }
        return 'SFHome'
    }
}