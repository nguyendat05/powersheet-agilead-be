import  {Router} from "express";
import {
    createAccountingJournalAglController,
    getAllAccountingJournalAglController, hideAccountingJournalAglController, updateAccountingJournalAglController
} from "../controllers/accountingJournalAglController.js";

const router = Router();
router.get('/',getAllAccountingJournalAglController)
router.post('/',createAccountingJournalAglController)
router.delete('/:id',hideAccountingJournalAglController)
router.put('/:id',updateAccountingJournalAglController)
export default router;