import {
    createMaReportCashPlanningOs,
    getAllMaReportCashPlanningOs, hideMaReportCashPlanningOs,
    updateMaReportCashPlanningOs
} from "../services/maReportCashPlanningOsService.js";

export const getAllMaReportCashPlanningOsController = async (req, res) => {
    try {
        const data= await getAllMaReportCashPlanningOs();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createMaReportCashPlanningOsController = async (req, res) => {
    try {
        let createData = req.body;
        const data = await createMaReportCashPlanningOs(createData);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateMaReportCashPlanningOsController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateMaReportCashPlanningOs(id, updatedData);
        if (data.msg === "Đã cập nhật thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};

export const hideMaReportCashPlanningOsController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideMaReportCashPlanningOs(id);
        if (data.msg === "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};