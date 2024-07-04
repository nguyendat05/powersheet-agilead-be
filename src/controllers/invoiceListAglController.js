import {
    createInvoiceListAgl,
    getInvoiceListAgl,
    hideInvoiceListAgl,
    updateInvoiceListAgl
} from "../services/invoiceListAglService.js";


export const createInvoiceListAglController= async (req, res) => {
    try {
        const data = await createInvoiceListAgl(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getInvoiceListAglController = async (req, res) => {
    try {
        const data = await getInvoiceListAgl();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideInvoiceListAglController = async (req, res) => {
    try {
        const data = await hideInvoiceListAgl(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateInvoiceListAglController = async (req, res) => {
    try {
        const data = await updateInvoiceListAgl(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}