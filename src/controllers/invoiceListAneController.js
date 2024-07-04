import {
    createInvoiceListAne,
    getInvoiceListAne,
    hideInvoiceListAne,
    updateInvoiceListAne
} from "../services/invoiceListAneService.js";


export const createInvoiceListAneController= async (req, res) => {
    try {
        const data = await createInvoiceListAne(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getInvoiceListAneController = async (req, res) => {
    try {
        const data = await getInvoiceListAne();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideInvoiceListAneController = async (req, res) => {
    try {
        const data = await hideInvoiceListAne(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateInvoiceListAneController = async (req, res) => {
    try {
        const data = await updateInvoiceListAne(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}