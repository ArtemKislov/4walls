import {ProjectResolvers} from "../../resolvers-types";

const houses = [
    {
        id: '1',
        floors: 4,
    },
    {
        id: '2',
        floors: 2
    }
]

export const Project: ProjectResolvers = {
    buildings: (parent, args) => {
        console.log(parent)
        return houses
    }
}