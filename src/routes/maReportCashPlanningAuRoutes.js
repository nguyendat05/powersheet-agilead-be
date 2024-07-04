import {Router} from "express";
import {
    createMaReportCashPlanningAuController,
    getAllMaReportCashPlanningAuController,
    hideMaReportCashPlanningAuController, updateMaReportCashPlanningAuController
} from "../controllers/maReportCashPlanningAuController.js";

const router = Router();


// router.use(ProtectRoute);

router.get("/", getAllMaReportCashPlanningAuController);

router.post("/", createMaReportCashPlanningAuController);

router.put("/:id", updateMaReportCashPlanningAuController);

router.delete("/:id", hideMaReportCashPlanningAuController);


export default router;