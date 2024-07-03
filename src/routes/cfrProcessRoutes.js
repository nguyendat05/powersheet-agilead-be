import {Router} from "express";
import {
    createCfrProcessController, getAllCfrProcessController,
    hideCfrProcessController,
    updateCfrProcessController
} from "../controllers/cfrProcessController.js";


const router = Router();

// router.use(ProtectRoute);

router.get("/", getAllCfrProcessController);

router.post("/", createCfrProcessController);

router.put("/:id", updateCfrProcessController);

router.delete("/:id", hideCfrProcessController);


export default router;