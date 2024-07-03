import  {Router} from "express";
import {
    createMaReportProfitLossHvaV1Controller,
    hideMaReportProfitLossHvaV1Controller,
    getAllMaReportProfitLossHvaV1Controller,
    updateMaReportProfitLossHvaV1Controller
} from "../controllers/maReportProfitLossHvaV1Controller.js";

const router = Router();
router.get('/',getAllMaReportProfitLossHvaV1Controller)
router.post('/',createMaReportProfitLossHvaV1Controller)
router.delete('/:id',hideMaReportProfitLossHvaV1Controller)
router.put('/:id',updateMaReportProfitLossHvaV1Controller)
export default router;