import  {Router} from "express";
import {
    createInvoiceListAglController,
    getInvoiceListAglController,
    hideInvoiceListAglController, updateInvoiceListAglController
} from "../controllers/invoiceListAglController.js";


const router = Router();
router.get('/',getInvoiceListAglController)
router.post('/',createInvoiceListAglController)
router.delete('/:id',hideInvoiceListAglController)
router.put('/:id',updateInvoiceListAglController)
export default router;