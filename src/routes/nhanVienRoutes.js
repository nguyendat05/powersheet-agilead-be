import  {Router} from "express";
import {
    getNhanVienController,
    createNhanVienController,
    hideNhanVienController,
    updateNhanVienController
} from "../controllers/nhanVienController.js";

const router = Router();
router.get('/',getNhanVienController)
router.post('/',createNhanVienController)
router.delete('/:id',hideNhanVienController)
router.put('/:id',updateNhanVienController)
export default router;