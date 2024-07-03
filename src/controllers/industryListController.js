import {
    createIndustryList,
    getAllIndustryList,
    hideIndustryList,
    updateIndustryList
} from "../services/industryListService.js";


export const getAllIndustryListController = async (req, res) => {
    try {

        const data = await getAllIndustryList();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createIndustryListController = async (req, res) => {
    try {
        const data = await createIndustryList(req.body);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateIndustryListController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateIndustryList(id, updatedData);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideIndustryListController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideIndustryList(id);
        if (data.msg=== "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};