import {
    createKmfKmnsList,
    getAllKmfKmnsList,
    hideKmfKmnsList,
    updateKmfKmnsList
} from "../services/kmfKmnsListService.js";


export const getAllKmfKmnsListController = async (req, res) => {
    try {
        const data = await getAllKmfKmnsList();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json();
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


export const createKmfKmnsListController = async (req, res) => {
    try {
        const data = await createKmfKmnsList(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};


export const updateKmfKmnsListController = async (req, res) => {
    try {
        let {id} = req.params;
        const updatedData = req.body;
        const data = await updateKmfKmnsList(id, updatedData);
        if (data.msg === "Đã cập nhật thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};

export const hideKmfKmnsListController = async (req, res) => {
    try {
        let {id} = req.params;
        const data = await hideKmfKmnsList(id);
        if (data.msg === "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};