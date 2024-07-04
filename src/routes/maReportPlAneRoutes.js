import  {Router} from "express";
import {
    createMaReportPlAneController, getMaReportPlAneController,
    hideMaReportPlAneController,
    updateMaReportPlAneController
} from "../controllers/maReportPlAneController.js";


const router = Router();
router.get('/',getMaReportPlAneController)
router.post('/',createMaReportPlAneController)
router.delete('/:id',hideMaReportPlAneController)
router.put('/:id',updateMaReportPlAneController)
export default router;