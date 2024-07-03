import {
    createMaReportProfitLossHvaV3,
    hideMaReportProfitLossHvaV3,
    getAllMaReportProfitLossHvaV3,
    updateMaReportProfitLossHvaV3
} from "../services/maReportProfitLossHvaV3Service.js";


export const getAllMaReportProfitLossHvaV3Controller = async (req, res) => {
    try {
        const data = await getAllMaReportProfitLossHvaV3();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};
export const createMaReportProfitLossHvaV3Controller  = async (req, res) => {
    try {
        const data = await createMaReportProfitLossHvaV3(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};
export const hideMaReportProfitLossHvaV3Controller  = async (req , res) => {
    try {
        const data = await hideMaReportProfitLossHvaV3(req.params.id);
        if (data.msg === "Đã ẩn thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateMaReportProfitLossHvaV3Controller  = async (req , res) => {
    try {
        const data = await updateMaReportProfitLossHvaV3(req.params.id , req.body);
        if (data.msg === "Đã sửa thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}