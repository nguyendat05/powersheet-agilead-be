import {Router} from "express";
import {
    createMaReportEquityController,
    getAllMaReportEquityController,hideMaReportEquityController, updateMaReportEquityController
} from "../controllers/maReportEquityController.js";

const router = Router();


// router.use(ProtectRoute);

router.get("/", getAllMaReportEquityController);

router.post("/", createMaReportEquityController);

router.put("/:id", updateMaReportEquityController);

router.delete("/:id", hideMaReportEquityController);


export default router;