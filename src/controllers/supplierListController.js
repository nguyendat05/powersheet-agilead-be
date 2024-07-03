import {
    createSupplierList,
    getSupplierList,
    hideSupplierList,
    updateSupplierList
} from "../services/supplierListService.js";


export const createSupplierListController = async (req, res) => {
    try {
        const data = await createSupplierList(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getSupplierListController = async (req, res) => {
    try {
        const data = await getSupplierList();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideSupplierListController = async (req, res) => {
    try {
        const data = await hideSupplierList(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateSupplierListController = async (req, res) => {
    try {
        const data = await updateSupplierList(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}