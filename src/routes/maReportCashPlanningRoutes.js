import {Router} from "express";

const router = Router();
import {
    createNewMaReportCashPlanningController,
    getAllMaReportCashPlanningController,
    hideMaReportCashPlanningController,
    updateMaReportCashPlanningController
} from "../controllers/maReportCashPlanningController.js";

// router.use(ProtectRoute);

router.get("/", getAllMaReportCashPlanningController);

router.post("/", createNewMaReportCashPlanningController);

router.put("/:id", updateMaReportCashPlanningController);

router.delete("/:id", hideMaReportCashPlanningController);


export default router;