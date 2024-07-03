import {Router} from "express";
import {
    createMaReportProfitLossASController,
    getAllMaReportProfitLossASController,hideMaReportProfitLossASController, updateMaReportProfitLossASController
} from "../controllers/maReportProfitLossASController.js";

const router = Router();

// router.use(ProtectRoute);

router.get("/", getAllMaReportProfitLossASController);

router.post("/", createMaReportProfitLossASController);

router.put("/:id", updateMaReportProfitLossASController);

router.delete("/:id", hideMaReportProfitLossASController);


export default router;