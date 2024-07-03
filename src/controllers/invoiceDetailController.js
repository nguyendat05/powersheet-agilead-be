import {
    createInvoiceDetail,
    getInvoiceDetail,
    hideInvoiceDetail,
    updateInvoiceDetail
} from "../services/invoiceDetailService.js";


export const createInvoiceDetailController= async (req, res) => {
    try {
        const data = await createInvoiceDetail(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getInvoiceDetailController = async (req, res) => {
    try {
        const data = await getInvoiceDetail();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideInvoiceDetailController = async (req, res) => {
    try {
        const data = await hideInvoiceDetail(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateInvoiceDetailController = async (req, res) => {
    try {
        const data = await updateInvoiceDetail(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}