import  {Router} from "express";
import {
    createInvoiceListAneController,
    getInvoiceListAneController,
    hideInvoiceListAneController, updateInvoiceListAneController
} from "../controllers/invoiceListAneController.js";


const router = Router();
router.get('/',getInvoiceListAneController)
router.post('/',createInvoiceListAneController)
router.delete('/:id',hideInvoiceListAneController)
router.put('/:id',updateInvoiceListAneController)
export default router;