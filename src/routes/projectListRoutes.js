import  {Router} from "express";
import {
    createProjectListController,
    getProjectListController,
    hideProjectListController, updateProjectListController
} from "../controllers/projectListController.js";

const router = Router();
router.get('/',getProjectListController)
router.post('/',createProjectListController)
router.delete('/:id',hideProjectListController)
router.put('/:id',updateProjectListController)
export default router;