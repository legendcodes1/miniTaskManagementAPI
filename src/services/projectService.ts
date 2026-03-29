import { error } from "console";
import { projectRepository } from "../repositories/projectRepository.ts"
import type { Project} from "../types/project.types.ts";



export const projectService = {

    getAllProjects() {
        return projectRepository.findAll()
    },

    getUserById(id: String) {
        const project = projectRepository.findById(id);

        if(!project){
             throw new Error("User does not exists")
        }
        return project
    },

    createProject(data : any) {
        const {id, name, description, ownerId, status} = data;

        const newProject: Project = {
            id,
            name,
            description,
            ownerId,
            status,
            createdAt: new Date().toISOString(),
            dueDate: new Date().toISOString()
          };
      
       return projectRepository.create(newProject);
    },

    deleteProject(id : string){
        const deletedProject = projectRepository.delete(id);

        if(!deletedProject){
            throw Error("user not found")
        }
        return deletedProject;
    }
}