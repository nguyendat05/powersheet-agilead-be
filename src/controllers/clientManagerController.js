import {
    createClientManager,
    getAllClientManager,
    hideClientManager,
    updateClientManager
} from "../services/clientManagerService.js";

export const getAllClientManagerController = async (req, res) => {
    try {
        const data = await getAllClientManager();
        if (data.msg === "Thành công" ) {
            res.status(200).json(data);
        } else {
            res.status(400).json();
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


export const createClientManagerController = async (req, res) => {
    try {
        const data = await createClientManager( req.body);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateClientManagerController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateClientManager(id, updatedData);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideClientManagerController = async (req, res) => {
    try {
        let { id } = req.params;
        const response = await hideClientManager(id);
        if (response.msg=== "Đã thay dổi show = fasle thành công") {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};