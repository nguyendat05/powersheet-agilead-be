import {Router} from "express";
import {
    createMaReportCashPlanningAneController,
    getAllMaReportCashPlanningAneController,
    hideMaReportCashPlanningAneController,
    updateMaReportCashPlanningAneController
} from "../controllers/maReportCashPlanningAneController.js";


const router = Router();


// router.use(ProtectRoute);

router.get("/", getAllMaReportCashPlanningAneController);

router.post("/", createMaReportCashPlanningAneController);

router.put("/:id", updateMaReportCashPlanningAneController);

router.delete("/:id", hideMaReportCashPlanningAneController);


export default router;