import { Router } from 'express';
import { userController } from '../controllers/userController.ts';
const router = Router();

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.post('/users', userController.createUser);
router.delete('/user/:id', userController.deleteUser);

export default router;