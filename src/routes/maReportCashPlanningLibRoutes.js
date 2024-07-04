import {Router} from "express";
import {
    createMaReportCashPlanningLibController,
    getAllMaReportCashPlanningLibController,
    hideMaReportCashPlanningLibController,
    updateMaReportCashPlanningLibController
} from "../controllers/maReportCashPlanningLibController.js";


const router = Router();


// router.use(ProtectRoute);

router.get("/", getAllMaReportCashPlanningLibController);

router.post("/", createMaReportCashPlanningLibController);

router.put("/:id", updateMaReportCashPlanningLibController);

router.delete("/:id", hideMaReportCashPlanningLibController);


export default router;