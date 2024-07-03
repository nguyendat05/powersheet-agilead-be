import {Router} from "express";
import {
    createContractListController,
    getAllContractListController,hideContractListController, updateContractListController
} from "../controllers/contractListController.js";

const router = Router();

// router.use(ProtectRoute);

router.get("/", getAllContractListController);

router.post("/", createContractListController);

router.put("/:id", updateContractListController);

router.delete("/:id", hideContractListController);


export default router;