import {
    createDivisionList,
    getAllDivisionList,
    hideDivisionList,
    updateDivisionList
} from "../services/divisionListService.js";

export const getAllDivisionListController = async (req, res) => {
    try {
        const data = await getAllDivisionList();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createDivisionListController = async (req, res) => {
    try {
        const data = await createDivisionList(req.body);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateDivisionListController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateDivisionList(id, updatedData);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideDivisionListController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideDivisionList(id);
        if (data.msg=== "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};