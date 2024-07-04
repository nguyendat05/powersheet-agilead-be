import  {Router} from "express";
import {
    createMaReportWcAllController,
    getAllMaReportWcAllController,
    hideMaReportWcAllController, updateMaReportWcAllController,
} from "../controllers/maReportWcAllController.js";

const router = Router();
router.get('/',getAllMaReportWcAllController)
router.post('/',createMaReportWcAllController)
router.delete('/:id',hideMaReportWcAllController)
router.put('/:id',updateMaReportWcAllController)
export default router;