import {Router} from "express";
import {
    createMaReportProfitLossHLController,
    getAllMaReportProfitLossHLController,hideMaReportProfitLossHLController, updateMaReportProfitLossHLController
} from "../controllers/maReportProfitLossHLController.js";

const router = Router();

// router.use(ProtectRoute);

router.get("/", getAllMaReportProfitLossHLController);

router.post("/", createMaReportProfitLossHLController);

router.put("/:id", updateMaReportProfitLossHLController);

router.delete("/:id", hideMaReportProfitLossHLController);


export default router;