import  {Router} from "express";
import {
    createLeavePhepController,
    getLeavePhepController,
    hideLeavePhepController, updateLeavePhepController
} from "../controllers/leavePhepController.js";

const router = Router();
router.get('/',getLeavePhepController)
router.post('/',createLeavePhepController)
router.delete('/:id',hideLeavePhepController)
router.put('/:id',updateLeavePhepController)
export default router;