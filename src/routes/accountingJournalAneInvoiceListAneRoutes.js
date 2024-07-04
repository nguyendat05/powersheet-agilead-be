import  {Router} from "express";
import {
    createAccountingJournalAneInvoiceListAneController, getAllAccountingJournalAneInvoiceListAneController,
    hideAccountingJournalAneInvoiceListAneController, updateAccountingJournalAneInvoiceListAneController
} from "../controllers/accountingJournalAneInvoiceListAneController.js";



const router = Router();
router.get('/',getAllAccountingJournalAneInvoiceListAneController)
router.post('/',createAccountingJournalAneInvoiceListAneController)
router.delete('/:id',hideAccountingJournalAneInvoiceListAneController)
router.put('/:id',updateAccountingJournalAneInvoiceListAneController)
export default router;