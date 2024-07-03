import  {Router} from "express";
import {
    createAccountingJournalProductListController,
    getAllAccountingJournalInvoiceListController,
    hideAccountingJournalProductListController,
    updateAccountingJournalProductListController
} from "../controllers/accountingJournalProductListController.js";

const router = Router();
router.get('/',getAllAccountingJournalInvoiceListController)
router.post('/',createAccountingJournalProductListController)
router.delete('/:id',hideAccountingJournalProductListController)
router.put('/:id',updateAccountingJournalProductListController)
export default router;