import {
    createContractList,
    getAllContractList,hideContractList,
    updateContractList
} from "../services/contractListService.js";

export const getAllContractListController = async (req, res) => {
    try {
        const data = await getAllContractList();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createContractListController = async (req, res) => {
    try {
        const data= await createContractList(req.body);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateContractListController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateContractList(id, updatedData);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideContractListController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideContractList(id);
        if (data.msg=== "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};