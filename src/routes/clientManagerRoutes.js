import {Router} from "express";
import {
    createClientManagerController,
    getAllClientManagerController,hideClientManagerController, updateClientManagerController
} from "../controllers/clientManagerController.js";



const router = Router();

// router.use(ProtectRoute);

router.get("/", getAllClientManagerController);

router.post("/", createClientManagerController);

router.put("/:id", updateClientManagerController);

router.delete("/:id", hideClientManagerController);


export default router;