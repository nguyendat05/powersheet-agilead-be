import {Router} from "express";
import {
    createCashAccountController,
    getAllCashAccountController,hideCashAccountController, updateCashAccountController
} from "../controllers/cashAccountController.js";

const router = Router();

// router.use(ProtectRoute);

router.get("/", getAllCashAccountController);

router.post("/", createCashAccountController);

router.put("/:id", updateCashAccountController);

router.delete("/:id", hideCashAccountController);


export default router;