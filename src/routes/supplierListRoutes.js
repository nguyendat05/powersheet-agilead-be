import  {Router} from "express";
import {
    createSupplierListController,
    getSupplierListController,
    hideSupplierListController, updateSupplierListController
} from "../controllers/supplierListController.js";


const router = Router();
router.get('/',getSupplierListController)
router.post('/',createSupplierListController)
router.delete('/:id',hideSupplierListController)
router.put('/:id',updateSupplierListController)
export default router;