import type {Project} from '../types/project.types.ts'
import { projects as projectData } from '../projects.ts';


const projects: Project[] = projectData;

export const projectRepository =  {

    findAll: (): Project[] => projects,

    findById: (id: string): Project | undefined =>
        projects.find(project => project.id === id),
    
      create: (project: Project): Project => {
        projects.push(project);
        return project;
      },
    
      delete: (id: string): Project | null => {
        const index = projects.findIndex(project => project.id === id);
        if (index === -1) return null;
    
        return projects.splice(index, 1)[0];
      }
}