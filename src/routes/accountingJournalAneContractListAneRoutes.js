import  {Router} from "express";
import {
    createAccountingJournalAneContractListAneController,
    getAllAccountingJournalAneContractListAneController,
    hideAccountingJournalAneContractListAneController,
    updateAccountingJournalAneContractListAneController
} from "../controllers/accountingJournalAneContractListAneController.js";


const router = Router();
router.get('/',getAllAccountingJournalAneContractListAneController)
router.post('/',createAccountingJournalAneContractListAneController)
router.delete('/:id',hideAccountingJournalAneContractListAneController)
router.put('/:id',updateAccountingJournalAneContractListAneController)
export default router;