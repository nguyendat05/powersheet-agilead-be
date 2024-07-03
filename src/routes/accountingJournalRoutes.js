import  {Router} from "express";
import {
    createAccountingJournalController,
    getAllAccountingJournalController, hideAccountingJournalController, updateAccountingJournalController
} from "../controllers/accountingJournalController.js";

const router = Router();
router.get('/',getAllAccountingJournalController)
router.post('/',createAccountingJournalController)
router.delete('/:id',hideAccountingJournalController)
router.put('/:id',updateAccountingJournalController)
export default router;