import {
    createCfrContent,
    getAllCfrContent,
    hideCfrContent,
    updateCfrContent
} from "../services/cfrContentService.js";


export const getAllCfrContentController = async (req, res) => {
    try {
        const data = await getAllCfrContent();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createCfrContentController = async (req, res) => {
    try {
        let createData = req.body;
        const data = await createCfrContent(createData);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateCfrContentController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateCfrContent(id, updatedData);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideCfrContentController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideCfrContent(id);
        if (data.msg=== "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};