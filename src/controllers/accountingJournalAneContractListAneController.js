import {
    createAccountingJournalAneContractListAne,
    getAllAccountingJournalAneContractListAne,
    hideAccountingJournalAneContractListAne,
    updateAccountingJournalAneContractListAne
} from "../services/accountingJournalAneContractListAneService.js";


export const createAccountingJournalAneContractListAneController = async (req, res) => {
    try {
        const data = await createAccountingJournalAneContractListAne(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getAllAccountingJournalAneContractListAneController = async (req, res) => {
    try {
        const data = await getAllAccountingJournalAneContractListAne();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideAccountingJournalAneContractListAneController = async (req, res) => {
    try {
        const data = await hideAccountingJournalAneContractListAne(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateAccountingJournalAneContractListAneController = async (req, res) => {
    try {
        const data = await updateAccountingJournalAneContractListAne(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}