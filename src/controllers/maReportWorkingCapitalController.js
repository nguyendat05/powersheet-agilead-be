import {
    createMaReportWorkingCapital, hideMaReportWorkingCapital,
    getAllMaReportWorkingCapital, updateMaReportWorkingCapital,
} from "../services/maReportWorkingCapitalService.js";

export const getAllMaReportWorkingCapitalController = async (req, res) => {
    try {
        const data = await getAllMaReportWorkingCapital();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};
export const createMaReportWorkingCapitalController = async (req, res) => {
    try {
        const data = await createMaReportWorkingCapital(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};
export const hideMaReportWorkingCapitalController = async (req , res) => {
    try {
        const data = await hideMaReportWorkingCapital(req.params.id);
        if (data.msg === "Đã ẩn thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateMaReportWorkingCapitalController = async (req , res) => {
    try {
        const data = await updateMaReportWorkingCapital(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}