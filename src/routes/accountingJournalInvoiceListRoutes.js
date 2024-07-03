import  {Router} from "express";
import {
    createAccountingJournalInvoiceListController,
    getAllAccountingJournalInvoiceListController,
    hideAccountingJournalInvoiceListController,
    updateAccountingJournalInvoiceListController
} from "../controllers/accountingJournalInvoiceListController.js";

const router = Router();
router.get('/',getAllAccountingJournalInvoiceListController)
router.post('/',createAccountingJournalInvoiceListController)
router.delete('/:id',hideAccountingJournalInvoiceListController)
router.put('/:id',updateAccountingJournalInvoiceListController)
export default router;