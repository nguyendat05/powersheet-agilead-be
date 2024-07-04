import {
    createContractListAgl,
    getAllContractListAgl, hideContractListAgl,
    updateContractListAgl
} from "../services/contractListAglService.js";

export const getAllContractListAglController = async (req, res) => {
    try {
        const data = await getAllContractListAgl();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createContractListAglController = async (req, res) => {
    try {
        const data= await createContractListAgl(req.body);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateContractListAglController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateContractListAgl(id, updatedData);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideContractListAglController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideContractListAgl(id);
        if (data.msg=== "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};