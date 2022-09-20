import {DeveloperResolvers} from "../../resolvers-types";

const projects = [
    {
        id: '1',
        name: 'project 1',
    },
    {
        id: '2',
        name: 'project 2',
    }
]

export const Developer: DeveloperResolvers = {
    projects: (parent, args) => {
        console.log(parent)
        return projects
    }
}