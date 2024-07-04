import {
    createAccountingJournalAglInvoiceListAgl,
    getAllAccountingJournalAglInvoiceListAgl,
    hideAccountingJournalAglInvoiceListAgl,
    updateAccountingJournalAglInvoiceListAgl
} from "../services/accountingJournalAglInvoiceListAglService.js";


export const createAccountingJournalAglInvoiceListAglController = async (req, res) => {
    try {
        const data = await createAccountingJournalAglInvoiceListAgl(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getAllAccountingJournalAglInvoiceListAglController = async (req, res) => {
    try {
        const data = await getAllAccountingJournalAglInvoiceListAgl();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideAccountingJournalAglInvoiceListAglController = async (req, res) => {
    try {
        const data = await hideAccountingJournalAglInvoiceListAgl(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateAccountingJournalAglInvoiceListAglController = async (req, res) => {
    try {
        const data = await updateAccountingJournalAglInvoiceListAgl(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}