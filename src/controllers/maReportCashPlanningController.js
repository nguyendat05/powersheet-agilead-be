import {
    createMaReportCashPlanning,
    getAllMaReportCashPlanning,
    hideMaReportCashPlanning,
    updateMaReportCashPlanning
} from "../services/maReportCashPlanningService.js";


export const getAllMaReportCashPlanningController = async (req, res) => {
    try {
        const data= await getAllMaReportCashPlanning();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createNewMaReportCashPlanningController = async (req, res) => {
    try {
        let createData = req.body;
        const data = await createMaReportCashPlanning(createData);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateMaReportCashPlanningController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateMaReportCashPlanning(id, updatedData);
        if (data.msg === "Đã cập nhật thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};

export const hideMaReportCashPlanningController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideMaReportCashPlanning(id);
        if (data.msg === "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};