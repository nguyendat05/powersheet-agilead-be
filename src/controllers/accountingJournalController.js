import {
    createAccountingJournal,
    getAllAccountingJournal,
    hideAccountingJournal, updateAccountingJournal
} from "../services/accountingJournalService.js";


export const createAccountingJournalController = async (req, res) => {
    try {
        const data = await createAccountingJournal(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getAllAccountingJournalController = async (req, res) => {
    try {
        const data = await getAllAccountingJournal();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideAccountingJournalController = async (req, res) => {
    try {
        const data = await hideAccountingJournal(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateAccountingJournalController = async (req, res) => {
    try {
        const data = await updateAccountingJournal(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}