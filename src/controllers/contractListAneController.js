import {
    createContractListAne,
    getAllContractListAne, hideContractListAne,
    updateContractListAne
} from "../services/contractListAneService.js";

export const getAllContractListAneController = async (req, res) => {
    try {
        const data = await getAllContractListAne();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createContractListAneController = async (req, res) => {
    try {
        const data= await createContractListAne(req.body);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateContractListAneController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateContractListAne(id, updatedData);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideContractListAneController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideContractListAne(id);
        if (data.msg=== "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};