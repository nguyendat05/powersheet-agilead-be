import {
    createCfrProcess,
    getAllCfrProcess,hideCfrProcess,
    updateCfrProcess
} from "../services/cfrProcessService.js";


export const getAllCfrProcessController = async (req, res) => {
    try {
        const data = await getAllCfrProcess();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}



export const createCfrProcessController = async (req, res) => {
    try {
        let createData = req.body;
        const data = await createCfrProcess(createData);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateCfrProcessController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateCfrProcess(id, updatedData);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideCfrProcessController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideCfrProcess(id);
        if (data.msg=== "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};