import {Router} from "express";
import {
    createCfrContentController,
    getAllCfrContentController,
    hideCfrContentController,
    updateCfrContentController
} from "../controllers/cfrContentController.js";

const router = Router();

// router.use(ProtectRoute);

router.get("/", getAllCfrContentController);

router.post("/", createCfrContentController);

router.put("/:id", updateCfrContentController);

router.delete("/:id", hideCfrContentController);


export default router;