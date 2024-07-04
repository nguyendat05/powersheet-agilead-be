import  {Router} from "express";
import {
    createMaReportPlAaaController,
    getMaReportPlAaaController,
    hideMaReportPlAaaController,
    updateMaReportPlAaaController
} from "../controllers/maReportPlAaaController.js";

const router = Router();
router.get('/',getMaReportPlAaaController)
router.post('/',createMaReportPlAaaController)
router.delete('/:id',hideMaReportPlAaaController)
router.put('/:id',updateMaReportPlAaaController)
export default router;