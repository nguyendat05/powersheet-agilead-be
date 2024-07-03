import  {Router} from "express";
import {
    createVasAccountListController,
    getVasAccountListController,
    hideVasAccountListController, updateVasAccountListController
} from "../controllers/vasAccountListController.js";
const router = Router();
router.get('/',getVasAccountListController)
router.post('/',createVasAccountListController)
router.delete('/:id',hideVasAccountListController)
router.put('/:id',updateVasAccountListController)
export default router;