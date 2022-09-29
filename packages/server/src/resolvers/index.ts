import {developers} from "./queries/developers";
import {project} from "./queries/project";
import {Developer} from "./types/Developer";
import {Project} from "./types/Project";
import {Resolvers} from "../resolvers-types";
import {createDeveloper} from "./mutations/createDeveloper";
import {createProject} from "./mutations/createProject";
import {createCondo} from "./mutations/createCondo";
import {createSFHome} from "./mutations/createSFHome";

const resolvers: Resolvers = {
    Query: {
        developers,
        project
    },
    Mutation: {
        createDeveloper,
        createProject,
        createCondo,
        createSFHome
    },
    Developer,
    Project,
    Building: {
        __resolveType(obj, context, info) {
            if ('elevator' in obj) {
                return 'Condo'
            }
            return 'SFHome'
        }
    }
};

export default resolvers