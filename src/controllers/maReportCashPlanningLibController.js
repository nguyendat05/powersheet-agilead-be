import {
    createMaReportCashPlanningLib,
    getAllMaReportCashPlanningLib, updateMaReportCashPlanningLib
} from "../services/maReportCashPlanningLibService.js";


export const getAllMaReportCashPlanningLibController = async (req, res) => {
    try {
        const data= await getAllMaReportCashPlanningLib();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createMaReportCashPlanningLibController = async (req, res) => {
    try {
        let createData = req.body;
        const data = await createMaReportCashPlanningLib(createData);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateMaReportCashPlanningLibController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateMaReportCashPlanningLib(id, updatedData);
        if (data.msg === "Đã cập nhật thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};

export const hideMaReportCashPlanningLibController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideMaReportCashPlanningLib(id);
        if (data.msg === "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};