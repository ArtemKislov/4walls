import {createProjectDataloader} from "./projects";

export const createDataloaders = () => ({
    project: createProjectDataloader()
})