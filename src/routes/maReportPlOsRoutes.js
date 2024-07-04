import  {Router} from "express";
import {
    createMaReportPlOsController,
    getMaReportPlOsController,
    hideMaReportPlOsController, updateMaReportPlOsController
} from "../controllers/maReportPlOsController.js";


const router = Router();
router.get('/',getMaReportPlOsController)
router.post('/',createMaReportPlOsController)
router.delete('/:id',hideMaReportPlOsController)
router.put('/:id',updateMaReportPlOsController)
export default router;