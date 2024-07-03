import {
    createAccountingJournalProductList,
    getAllAccountingJournalProductList, hideAccountingJournalProductList, updateAccountingJournalProductList
} from "../services/AccountingJournalProductListService.js";


export const createAccountingJournalProductListController = async (req, res) => {
    try {
        const data = await createAccountingJournalProductList(req.body);
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
        const data = await getAllAccountingJournalProductList();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideAccountingJournalProductListController = async (req, res) => {
    try {
        const data = await hideAccountingJournalProductList(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateAccountingJournalProductListController = async (req, res) => {
    try {
        const data = await updateAccountingJournalProductList(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}