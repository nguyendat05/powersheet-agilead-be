import  {Router} from "express";
import {
    createTaskManagerController,
    getTaskManagerController,
    hideTaskManagerController, updateTaskManagerController
} from "../controllers/taskManagerController.js";



const router = Router();
router.get('/',getTaskManagerController)
router.post('/',createTaskManagerController)
router.delete('/:id',hideTaskManagerController)
router.put('/:id',updateTaskManagerController)
export default router;