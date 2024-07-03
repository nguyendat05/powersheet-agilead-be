import {
    createMaReportProfitLossAS,
    getAllMaReportProfitLossAS,hideMaReportProfitLossAS, updateMaReportProfitLossAS
} from "../services/maReportProfitLossASService.js";

export const getAllMaReportProfitLossASController = async (req, res) => {
    try {
        const data = await getAllMaReportProfitLossAS();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


export const createMaReportProfitLossASController = async (req, res) => {
    try {
        const data = await createMaReportProfitLossAS(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateMaReportProfitLossASController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateMaReportProfitLossAS(id, updatedData);
        if (data.msg === "Thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};

export const hideMaReportProfitLossASController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideMaReportProfitLossAS(id);
        if (data.msg === "Đã ẩn thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};