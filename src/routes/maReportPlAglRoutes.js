import  {Router} from "express";
import {
    createMaReportPlAglController,
    getMaReportPlAglController,
    hideMaReportPlAglController, updateMaReportPlAglController
} from "../controllers/maReportPlAglController.js";


const router = Router();
router.get('/',getMaReportPlAglController)
router.post('/',createMaReportPlAglController)
router.delete('/:id',hideMaReportPlAglController)
router.put('/:id',updateMaReportPlAglController)
export default router;