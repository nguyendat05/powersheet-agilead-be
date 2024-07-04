import {
    createAccountingJournalAne,
    getAllAccountingJournalAne,
    hideAccountingJournalAne, updateAccountingJournalAne
} from "../services/accountingJournalAneService.js";


export const createAccountingJournalAneController = async (req, res) => {
    try {
        const data = await createAccountingJournalAne(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getAllAccountingJournalAneController = async (req, res) => {
    try {
        const data = await getAllAccountingJournalAne();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideAccountingJournalAneController = async (req, res) => {
    try {
        const data = await hideAccountingJournalAne(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateAccountingJournalAneController = async (req, res) => {
    try {
        const data = await updateAccountingJournalAne(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}