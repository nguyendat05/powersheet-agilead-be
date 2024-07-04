import  {Router} from "express";
import {
    createAccountingJournalAglInvoiceListAglController,
    getAllAccountingJournalAglInvoiceListAglController,
    hideAccountingJournalAglInvoiceListAglController,
    updateAccountingJournalAglInvoiceListAglController
} from "../controllers/accountingJournaAglInvoiceListAglController.js";


const router = Router();
router.get('/',getAllAccountingJournalAglInvoiceListAglController)
router.post('/',createAccountingJournalAglInvoiceListAglController)
router.delete('/:id',hideAccountingJournalAglInvoiceListAglController)
router.put('/:id',updateAccountingJournalAglInvoiceListAglController)
export default router;