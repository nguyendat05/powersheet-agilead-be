import  {Router} from "express";
import {
    createInvoiceListController,
    getInvoiceListController,
    hideInvoiceListController, updateInvoiceListController
} from "../controllers/invoiceListController.js";

const router = Router();
router.get('/',getInvoiceListController)
router.post('/',createInvoiceListController)
router.delete('/:id',hideInvoiceListController)
router.put('/:id',updateInvoiceListController)
export default router;