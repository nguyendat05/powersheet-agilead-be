import {Router} from "express";
import {
    createContractDetailController, getAllContractDetailController,
    hideContractDetailController,
    updateContractDetailController
} from "../controllers/contractDetailController.js";


const router = Router();

// router.use(ProtectRoute);

router.get("/", getAllContractDetailController);

router.post("/", createContractDetailController);

router.put("/:id", updateContractDetailController);

router.delete("/:id", hideContractDetailController);


export default router;