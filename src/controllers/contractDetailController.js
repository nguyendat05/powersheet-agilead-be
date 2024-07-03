import {
    createContractDetail,
    getAllContractDetail,
    hideContractDetail,
    updateContractDetail
} from "../services/contractDetailService.js";


export const getAllContractDetailController = async (req, res) => {
    try {
        const data = await getAllContractDetail();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createContractDetailController = async (req, res) => {
    try {
        const data= await createContractDetail(req.body);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateContractDetailController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateContractDetail(id, updatedData);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideContractDetailController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideContractDetail(id);
        if (data.msg=== "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};