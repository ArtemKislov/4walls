import {developers} from "./queries/developers";
import {project} from "./queries/project";
import {Developer} from "./types/Developer";
import {Project} from "./types/Project";
import {Resolvers} from "../resolvers-types";
import {createDeveloper} from "./mutations/createDeveloper";
import {createProject} from "./mutations/createProject";
import {createCondo} from "./mutations/createCondo";
import {createSFHome} from "./mutations/createSFHome";
import {Building} from "./interfaces/Building";
import {createApartment} from "./mutations/createApartment";
import {condo} from "./queries/condo";
import {Apartment} from "./types/Apartment";
import {Condo} from "./types/Condo";
import {bookApartment} from "./mutations/bookApartment";

const resolvers: Resolvers = {
    Query: {
        developers,
        project,
        condo
    },
    Mutation: {
        createDeveloper,
        createProject,
        createCondo,
        createSFHome,
        createApartment,
        bookApartment
    },
    Developer,
    Project,
    Condo,
    Building,
    Apartment
};

export default resolvers