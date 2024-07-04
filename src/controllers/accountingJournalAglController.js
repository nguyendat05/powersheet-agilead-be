import {
    createAccountingJournalAgl,
    getAllAccountingJournalAgl,
    hideAccountingJournalAgl, updateAccountingJournalAgl
} from "../services/accountingJournalAglService.js";


export const createAccountingJournalAglController = async (req, res) => {
    try {
        const data = await createAccountingJournalAgl(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getAllAccountingJournalAglController = async (req, res) => {
    try {
        const data = await getAllAccountingJournalAgl();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideAccountingJournalAglController = async (req, res) => {
    try {
        const data = await hideAccountingJournalAgl(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateAccountingJournalAglController = async (req, res) => {
    try {
        const data = await updateAccountingJournalAgl(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}