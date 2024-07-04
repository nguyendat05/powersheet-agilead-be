import {
    createAccountingJournalAneInvoiceListAne,
    getAllAccountingJournalAneInvoiceListAne,
    hideAccountingJournalAneInvoiceListAne,
    updateAccountingJournalAneInvoiceListAne
} from "../services/accountingJournalAneInvoiceListAneService.js";


export const createAccountingJournalAneInvoiceListAneController = async (req, res) => {
    try {
        const data = await createAccountingJournalAneInvoiceListAne(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getAllAccountingJournalAneInvoiceListAneController = async (req, res) => {
    try {
        const data = await getAllAccountingJournalAneInvoiceListAne();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideAccountingJournalAneInvoiceListAneController = async (req, res) => {
    try {
        const data = await hideAccountingJournalAneInvoiceListAne(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateAccountingJournalAneInvoiceListAneController = async (req, res) => {
    try {
        const data = await updateAccountingJournalAneInvoiceListAne(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}