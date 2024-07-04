import {Router} from "express";
import {
    createNewMaReportCashPlanningAneController,
    getAllMaReportCashPlanningAneController,
    hideMaReportCashPlanningAneController,
    updateMaReportCashPlanningAneController
} from "../controllers/maReportCashPlanningAneController.js";


const router = Router();


// router.use(ProtectRoute);

router.get("/", getAllMaReportCashPlanningAneController);

router.post("/", createNewMaReportCashPlanningAneController);

router.put("/:id", updateMaReportCashPlanningAneController);

router.delete("/:id", hideMaReportCashPlanningAneController);


export default router;