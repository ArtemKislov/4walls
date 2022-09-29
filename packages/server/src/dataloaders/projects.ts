import DataLoader from "dataloader";
import { Project } from '@prisma/client'
import {prisma} from "../prisma";

export const createProjectDataloader = () => new DataLoader<string, Project | null>((ids) => {
    return prisma.project.findMany({ where: { id: { in: ids as string[] } } })
})