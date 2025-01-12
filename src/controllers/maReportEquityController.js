import {
    createMaReportEquity,
    getAllMaReportEquity,hideMaReportEquity, updateMaReportEquity
} from "../services/maReportEquityService.js";

export const getAllMaReportEquityController = async (req, res) => {
    try {
        const data = await getAllMaReportEquity();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


export const createMaReportEquityController = async (req, res) => {
    try {
        const data = await createMaReportEquity(req.body);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateMaReportEquityController = async (req, res) => {
    try {
        let { id } = req.params;
        const updatedData = req.body;
        const data = await updateMaReportEquity(id, updatedData);
        if (data.msg === "Đã cập nhật thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};

export const hideMaReportEquityController = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await hideMaReportEquity(id);
        if (data.msg === "Đã thay dổi show = fasle thành công") {
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};