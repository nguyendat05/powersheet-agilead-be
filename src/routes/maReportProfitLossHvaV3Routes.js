import  {Router} from "express";
import {
    createMaReportProfitLossHvaV3Controller,
    hideMaReportProfitLossHvaV3Controller,
    getAllMaReportProfitLossHvaV3Controller,
    updateMaReportProfitLossHvaV3Controller
} from "../controllers/maReportProfitLossHvaV3Controller.js";

const router = Router();
router.get('/',getAllMaReportProfitLossHvaV3Controller)
router.post('/',createMaReportProfitLossHvaV3Controller)
router.delete('/:id',hideMaReportProfitLossHvaV3Controller)
router.put('/:id',updateMaReportProfitLossHvaV3Controller)
export default router;