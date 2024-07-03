import  {Router} from "express";
import {
    createProductListController,
    getProductListController, hideProductListController, updateProductListController
} from "../controllers/productListController.js";

const router = Router();
router.get('/',getProductListController)
router.post('/',createProductListController)
router.delete('/:id',hideProductListController)
router.put('/:id',updateProductListController)
export default router;