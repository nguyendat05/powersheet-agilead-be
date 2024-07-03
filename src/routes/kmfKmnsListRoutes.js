import {Router} from "express";
import {
    createKmfKmnsListController,
    getAllKmfKmnsListController, hideKmfKmnsListController,
    updateKmfKmnsListController
} from "../controllers/kmfKmnsListController.js";


const router = Router();

// router.use(ProtectRoute);

router.get("/", getAllKmfKmnsListController);

router.post("/", createKmfKmnsListController);

router.put("/:id", updateKmfKmnsListController);

router.delete("/:id", hideKmfKmnsListController);


export default router;