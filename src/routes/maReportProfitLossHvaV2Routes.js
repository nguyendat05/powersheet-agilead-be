import  {Router} from "express";
import {
    createMaReportProfitLossHvaV2Controller,
    hideMaReportProfitLossHvaV2Controller,
    getAllMaReportProfitLossHvaV2Controller,
    updateMaReportProfitLossHvaV2Controller
} from "../controllers/maReportProfitLossHvaV2Controller.js";

const router = Router();
router.get('/',getAllMaReportProfitLossHvaV2Controller)
router.post('/',createMaReportProfitLossHvaV2Controller)
router.delete('/:id',hideMaReportProfitLossHvaV2Controller)
router.put('/:id',updateMaReportProfitLossHvaV2Controller)
export default router;