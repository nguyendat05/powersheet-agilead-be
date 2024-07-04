import {
    createAccountingJournalAglContractListAgl,
    getAllAccountingJournalAglContractListAgl,
    hideAccountingJournalAglContractListAgl,
    updateAccountingJournalAglContractListAgl
} from "../services/accountingJournalAglContractListAglService.js";


export const createAccountingJournalAglContractListAglController = async (req, res) => {
    try {
        const data = await createAccountingJournalAglContractListAgl(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getAllAccountingJournalAglContractListAglController = async (req, res) => {
    try {
        const data = await getAllAccountingJournalAglContractListAgl();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideAccountingJournalAglContractListAglController = async (req, res) => {
    try {
        const data = await hideAccountingJournalAglContractListAgl(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateAccountingJournalAglContractListAglController = async (req, res) => {
    try {
        const data = await updateAccountingJournalAglContractListAgl(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}