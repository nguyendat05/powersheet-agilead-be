import {
    createMaReportCashPlanningAne,
    getAllMaReportCashPlanningAne, hideMaReportCashPlanningAne, updateMaReportCashPlanningAne
} from "../services/maReportCashPlanningAneService.js";


export const getAllMaReportCashPlanningAneController = async (req, res) => {
    try {
        const data= await getAllMaReportCashPlanningAne();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createMaReportCashPlanningAneController = async (req, res) => {
    try {
        let createData = req.body;
        const data = await createMaReportCashPlanningAne(createData);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateMaReportCashPlanningAneController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateMaReportCashPlanningAne(id, updatedData);
        if (data.msg === "Đã cập nhật thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};

export const hideMaReportCashPlanningAneController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideMaReportCashPlanningAne(id);
        if (data.msg === "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};