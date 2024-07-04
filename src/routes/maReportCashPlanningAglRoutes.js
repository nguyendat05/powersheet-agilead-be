import {Router} from "express";
import {
    createNewMaReportCashPlanningAglController,
    getAllMaReportCashPlanningAglController,
    hideMaReportCashPlanningAglController,
    updateMaReportCashPlanningAglController
} from "../controllers/maReportCashPlanningAglController.js";

const router = Router();


// router.use(ProtectRoute);

router.get("/", getAllMaReportCashPlanningAglController);

router.post("/", createNewMaReportCashPlanningAglController);

router.put("/:id", updateMaReportCashPlanningAglController);

router.delete("/:id", hideMaReportCashPlanningAglController);


export default router;