import {Router} from "express";
import {
    createContractListAneController,
    getAllContractListAneController, hideContractListAneController, updateContractListAneController
} from "../controllers/contractListAneController.js";

const router = Router();

// router.use(ProtectRoute);

router.get("/", getAllContractListAneController);

router.post("/", createContractListAneController);

router.put("/:id", updateContractListAneController);

router.delete("/:id", hideContractListAneController);


export default router;