import  {Router} from "express";
import {
    createMaReportPlLibController,
    getMaReportPlLibController,
    hideMaReportPlLibController, updateMaReportPlLibController
} from "../controllers/maReportPlLibController.js";

const router = Router();
router.get('/',getMaReportPlLibController)
router.post('/',createMaReportPlLibController)
router.delete('/:id',hideMaReportPlLibController)
router.put('/:id',updateMaReportPlLibController)
export default router;