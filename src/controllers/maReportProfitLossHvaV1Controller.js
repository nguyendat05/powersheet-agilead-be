import {
    createMaReportProfitLossHvaV1, hideMaReportProfitLossHvaV1,
    getAllMaReportProfitLossHvaV1, updateMaReportProfitLossHvaV1
} from "../services/maReportProfitLossHvaV1Service.js";

export const getAllMaReportProfitLossHvaV1Controller = async (req, res) => {
    try {
        const data = await getAllMaReportProfitLossHvaV1();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};
export const createMaReportProfitLossHvaV1Controller  = async (req, res) => {
    try {
        const data = await createMaReportProfitLossHvaV1(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};
export const hideMaReportProfitLossHvaV1Controller  = async (req , res) => {
    try {
        const data = await hideMaReportProfitLossHvaV1(req.params.id);
        if (data.msg === "Đã ẩn thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateMaReportProfitLossHvaV1Controller  = async (req , res) => {
    try {
        const data = await updateMaReportProfitLossHvaV1(req.params.id , req.body);
        if (data.msg === "Đã sửa thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}