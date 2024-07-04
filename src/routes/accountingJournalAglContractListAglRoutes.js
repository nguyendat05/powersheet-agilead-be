import  {Router} from "express";
import {
    createAccountingJournalAglContractListAglController,
    getAllAccountingJournalAglContractListAglController,
    hideAccountingJournalAglContractListAglController,
    updateAccountingJournalAglContractListAglController
} from "../controllers/accountingJournalAglContractListAglController.js";

const router = Router();
router.get('/',getAllAccountingJournalAglContractListAglController)
router.post('/',createAccountingJournalAglContractListAglController)
router.delete('/:id',hideAccountingJournalAglContractListAglController)
router.put('/:id',updateAccountingJournalAglContractListAglController)
export default router;