import  {Router} from "express";
import {
    createAccountingJournalContractListController,
    getAllAccountingJournalContractListController,
    hideAccountingJournalContractListController,
    updateAccountingJournalContractListController
} from "../controllers/accountingJournalContractListController.js";

const router = Router();
router.get('/',getAllAccountingJournalContractListController)
router.post('/',createAccountingJournalContractListController)
router.delete('/:id',hideAccountingJournalContractListController)
router.put('/:id',updateAccountingJournalContractListController)
export default router;