import {Router} from "express";
import {
    createNewMaReportCashPlanningLibController,
    getAllMaReportCashPlanningLibController,
    hideMaReportCashPlanningLibController,
    updateMaReportCashPlanningLibController
} from "../controllers/maReportCashPlanningLibController.js";


const router = Router();


// router.use(ProtectRoute);

router.get("/", getAllMaReportCashPlanningLibController);

router.post("/", createNewMaReportCashPlanningLibController);

router.put("/:id", updateMaReportCashPlanningLibController);

router.delete("/:id", hideMaReportCashPlanningLibController);


export default router;