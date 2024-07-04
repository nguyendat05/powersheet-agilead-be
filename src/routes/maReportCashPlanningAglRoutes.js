import {Router} from "express";
import {
    createMaReportCashPlanningAglController,
    getAllMaReportCashPlanningAglController,
    hideMaReportCashPlanningAglController,
    updateMaReportCashPlanningAglController
} from "../controllers/maReportCashPlanningAglController.js";

const router = Router();


// router.use(ProtectRoute);

router.get("/", getAllMaReportCashPlanningAglController);

router.post("/", createMaReportCashPlanningAglController);

router.put("/:id", updateMaReportCashPlanningAglController);

router.delete("/:id", hideMaReportCashPlanningAglController);


export default router;