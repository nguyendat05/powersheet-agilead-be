import  {Router} from "express";
import {
    createPaymentRequestController,
    hidePaymentRequestController,
    getPaymentRequestController, updatePaymentRequestController
} from "../controllers/paymentRequestController.js";
const router = Router();
router.get('/',getPaymentRequestController)
router.post('/',createPaymentRequestController)
router.delete('/:id',hidePaymentRequestController)
router.put('/:id',updatePaymentRequestController)
export default router;