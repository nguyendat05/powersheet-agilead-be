import {
    createMaReportProfitLossHL,
    getAllMaReportProfitLossHL,hideMaReportProfitLossHL, updateMaReportProfitLossHL
} from "../services/maReportProfitLossHLService.js";

export const getAllMaReportProfitLossHLController = async (req, res) => {
    try {
        const data = await getAllMaReportProfitLossHL();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createMaReportProfitLossHLController = async (req, res) => {
    try {
        const data = await createMaReportProfitLossHL( req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateMaReportProfitLossHLController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateMaReportProfitLossHL(id, updatedData);
        if (data.msg === "Đã cập nhật thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};

export const hideMaReportProfitLossHLController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideMaReportProfitLossHL(id);
        if (data.msg === "Đã ẩn thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};