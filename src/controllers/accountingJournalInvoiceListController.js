import {
    createAccountingJournalInvoiceList,
    getAllAccountingJournalInvoiceList, hideAccountingJournalInvoiceList, updateAccountingJournalInvoiceList
} from "../services/accountingJournalInvoiceListService.js";


export const createAccountingJournalInvoiceListController = async (req, res) => {
    try {
        const data = await createAccountingJournalInvoiceList(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getAllAccountingJournalInvoiceListController = async (req, res) => {
    try {
        const data = await getAllAccountingJournalInvoiceList();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideAccountingJournalInvoiceListController = async (req, res) => {
    try {
        const data = await hideAccountingJournalInvoiceList(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateAccountingJournalInvoiceListController = async (req, res) => {
    try {
        const data = await updateAccountingJournalInvoiceList(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}