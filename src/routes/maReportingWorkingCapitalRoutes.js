import  {Router} from "express";
import {
    createMaReportWorkingCapitalController,
    hideMaReportWorkingCapitalController,
    getAllMaReportWorkingCapitalController, updateMaReportWorkingCapitalController
} from "../controllers/maReportWorkingCapitalController.js";

const router = Router();
router.get('/',getAllMaReportWorkingCapitalController)
router.post('/',createMaReportWorkingCapitalController)
router.delete('/:id',hideMaReportWorkingCapitalController)
router.put('/:id',updateMaReportWorkingCapitalController)
export default router;