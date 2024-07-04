import {
    createMaReportCashPlanningAu,
    getAllMaReportCashPlanningAu, hideMaReportCashPlanningAu,
    updateMaReportCashPlanningAu
} from "../services/maReportCashPlanningAuService.js";


export const getAllMaReportCashPlanningAuController = async (req, res) => {
    try {
        const data= await getAllMaReportCashPlanningAu();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createMaReportCashPlanningAuController = async (req, res) => {
    try {
        let createData = req.body;
        const data = await createMaReportCashPlanningAu(createData);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateMaReportCashPlanningAuController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateMaReportCashPlanningAu(id, updatedData);
        if (data.msg === "Đã cập nhật thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};

export const hideMaReportCashPlanningAuController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideMaReportCashPlanningAu(id);
        if (data.msg === "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};