import {
    createProductList,
    getProductList, hideProductList,
    updateProductList
} from "../services/productListService.js";

export const createProductListController = async (req, res) => {
    try {
        const data = await createProductList(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getProductListController = async (req, res) => {
    try {
        const data = await getProductList();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideProductListController = async (req, res) => {
    try {
        const data = await hideProductList(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateProductListController = async (req, res) => {
    try {
        const data = await updateProductList(req.params.id , req.body);
        if (data.msg === "Thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}