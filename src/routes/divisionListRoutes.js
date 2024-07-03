import {Router} from "express";
import {
    createDivisionListController, getAllDivisionListController,
    hideDivisionListController,
    updateDivisionListController
} from "../controllers/divisionListController.js";

const router = Router();

// router.use(ProtectRoute);

router.get("/", getAllDivisionListController);

router.post("/", createDivisionListController);

router.put("/:id", updateDivisionListController);

router.delete("/:id", hideDivisionListController);


export default router;