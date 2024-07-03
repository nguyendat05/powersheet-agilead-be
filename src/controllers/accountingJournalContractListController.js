import {
    createAccountingJournalContractList,
    getAllAccountingJournalContractList, hideAccountingJournalContractList, updateAccountingJournalContractList
} from "../services/accountingJournalContractListService.js";


export const createAccountingJournalContractListController = async (req, res) => {
    try {
        const data = await createAccountingJournalContractList(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getAllAccountingJournalContractListController = async (req, res) => {
    try {
        const data = await getAllAccountingJournalContractList();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideAccountingJournalContractListController = async (req, res) => {
    try {
        const data = await hideAccountingJournalContractList(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateAccountingJournalContractListController = async (req, res) => {
    try {
        const data = await updateAccountingJournalContractList(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}