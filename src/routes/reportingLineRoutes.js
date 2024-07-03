import  {Router} from "express";
import {
    createReportingLineController,
    getReportingLineController, hideReportingLineController,
    updateReportingLineController
} from "../controllers/reportingLineController.js";


const router = Router();
router.get('/',getReportingLineController)
router.post('/',createReportingLineController)
router.delete('/:id',hideReportingLineController)
router.put('/:id',updateReportingLineController)
export default router;