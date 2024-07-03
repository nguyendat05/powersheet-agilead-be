import {createInvoiceList, getInvoiceList, hideInvoiceList, updateInvoiceList} from "../services/invoiceListService.js";


export const createInvoiceListController= async (req, res) => {
    try {
        const data = await createInvoiceList(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getInvoiceListController = async (req, res) => {
    try {
        const data = await getInvoiceList();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideInvoiceListController = async (req, res) => {
    try {
        const data = await hideInvoiceList(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateInvoiceListController = async (req, res) => {
    try {
        const data = await updateInvoiceList(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}