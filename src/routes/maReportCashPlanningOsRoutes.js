import {Router} from "express";
import {
    createMaReportCashPlanningOsController,
    getAllMaReportCashPlanningOsController, hideMaReportCashPlanningOsController, updateMaReportCashPlanningOsController
} from "../controllers/maReportCashPlanningOsController.js";

const router = Router();


// router.use(ProtectRoute);

router.get("/", getAllMaReportCashPlanningOsController);

router.post("/", createMaReportCashPlanningOsController);

router.put("/:id", updateMaReportCashPlanningOsController);

router.delete("/:id", hideMaReportCashPlanningOsController);


export default router;