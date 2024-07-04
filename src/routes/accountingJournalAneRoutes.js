import  {Router} from "express";
import {
    createAccountingJournalAneController,
    getAllAccountingJournalAneController, hideAccountingJournalAneController, updateAccountingJournalAneController
} from "../controllers/accountingJournalAneController.js";

const router = Router();
router.get('/',getAllAccountingJournalAneController)
router.post('/',createAccountingJournalAneController)
router.delete('/:id',hideAccountingJournalAneController)
router.put('/:id',updateAccountingJournalAneController)
export default router;