import {Router} from "express";
import {
    createContractListAglController,
    getAllContractListAglController, hideContractListAglController, updateContractListAglController
} from "../controllers/contractListAglController.js";


const router = Router();

// router.use(ProtectRoute);

router.get("/", getAllContractListAglController);

router.post("/", createContractListAglController);

router.put("/:id", updateContractListAglController);

router.delete("/:id", hideContractListAglController);


export default router;