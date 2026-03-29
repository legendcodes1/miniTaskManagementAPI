import { Router } from 'express';
import { projectController } from '../controllers/projectController.ts';
const router = Router();

router.get('/', projectController.getProject);
router.get('/:id', projectController.getProjectById);
router.post('/', projectController.createProject);
router.delete('/:id', projectController.deleteProject);

export default router;