import {createDataloaders} from "./dataloaders";

export const createContext = () => {
    return {
        dataloaders: createDataloaders()
    }
}

export type Context = ReturnType<typeof createContext>

