import {
    createMaReportProfitLossHvaV2, hideMaReportProfitLossHvaV2,
    getAllMaReportProfitLossHvaV2, updateMaReportProfitLossHvaV2
} from "../services/maReportProfitLossHvaV2Service.js";

export const getAllMaReportProfitLossHvaV2Controller = async (req, res) => {
    try {
        const data = await getAllMaReportProfitLossHvaV2();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};
export const createMaReportProfitLossHvaV2Controller  = async (req, res) => {
    try {
        const data = await createMaReportProfitLossHvaV2(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};
export const hideMaReportProfitLossHvaV2Controller  = async (req , res) => {
    try {
        const data = await hideMaReportProfitLossHvaV2(req.params.id);
        if (data.msg === "Đã ẩn thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateMaReportProfitLossHvaV2Controller  = async (req , res) => {
    try {
        const data = await updateMaReportProfitLossHvaV2(req.params.id , req.body);
        if (data.msg === "Đã sửa thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}