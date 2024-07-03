import {
    createVasAccountList,
    getVasAccountList,
    hideVasAccountList,
    updateVasAccountList
} from "../services/vasAccountListService.js";


export const createVasAccountListController= async (req, res) => {
    try {
        const data = await createVasAccountList(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getVasAccountListController = async (req, res) => {
    try {
        const data = await getVasAccountList();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideVasAccountListController = async (req, res) => {
    try {
        const data = await hideVasAccountList(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateVasAccountListController = async (req, res) => {
    try {
        const data = await updateVasAccountList(req.params.id , req.body);
        if (data.msg === "Thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}