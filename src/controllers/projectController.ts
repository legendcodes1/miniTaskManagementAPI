import express, { type Request, type Response } from 'express';
import { projectService } from "../services/projectService.ts"

export const projectController = {

    getProject(req:Request, res:Response) {
        const project = projectService.getAllProjects();

        if(!project){
            throw new Error("failed to get a project")
        }
        return res.status(200).json({message:"successful got project", data: project})
    },

    
    getProjectById(req: Request, res: Response) {
        try {
            const project = projectService.getUserById(req.params.id);
            res.status(200).json({message: "successfuly got project", data: project})
        } catch (err: any) {
            res.status(404).json({message: err.message, success:false})
        }
    },

    createProject(req:Request, res:Response){
        try {
            const project = projectService.createProject(req.body);
            res.status(200).json({message: "succesfully created a new project", data: project})
        }  catch (err: any) {
            res.status(404).json({message: err.message, success:false})
            
        }
  
    },

    deleteProject(req:Request, res:Response) {
        try {
            const projectToDelete = projectService.deleteProject(req.params.id);
            res.status(200).json({message: "succesfully created a new project", data: projectToDelete})
        } catch (err: any) {
            res.status(404).json({message: err.message, success:false})
        }
     

    },
    
}