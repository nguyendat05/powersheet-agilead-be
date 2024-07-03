import  {Router} from "express";
import {
    createTeamListController,
    getTeamListController,
    hideTeamListController, updateTeamListController
} from "../controllers/teamListController.js";
const router = Router();
router.get('/',getTeamListController)
router.post('/',createTeamListController)
router.delete('/:id',hideTeamListController)
router.put('/:id',updateTeamListController)
export default router;