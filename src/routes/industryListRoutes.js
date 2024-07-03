import {Router} from "express";
import {
    createIndustryListController, getAllIndustryListController,
    hideIndustryListController,
    updateIndustryListController
} from "../controllers/industryListController.js";


const router = Router();

// router.use(ProtectRoute);

router.get("/", getAllIndustryListController);

router.post("/", createIndustryListController);

router.put("/:id", updateIndustryListController);

router.delete("/:id", hideIndustryListController);


export default router;