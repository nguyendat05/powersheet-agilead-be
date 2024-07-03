import  {Router} from "express";
import {
    createInvoiceDetailController,
    getInvoiceDetailController,
    hideInvoiceDetailController, updateInvoiceDetailController
} from "../controllers/invoiceDetailController.js";

const router = Router();
router.get('/',getInvoiceDetailController)
router.post('/',createInvoiceDetailController)
router.delete('/:id',hideInvoiceDetailController)
router.put('/:id',updateInvoiceDetailController)
export default router;