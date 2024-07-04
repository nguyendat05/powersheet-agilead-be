import {
    createMaReportPlAne,
    getMaReportPlAne,
    hideMaReportPlAne,
    updateMaReportPlAne
} from "../services/maReportPlAneService.js";

export const createMaReportPlAneController = async (req, res) => {
    try {
        const data = await createMaReportPlAne(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getMaReportPlAneController = async (req, res) => {
    try {
        const data = await getMaReportPlAne();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideMaReportPlAneController = async (req, res) => {
    try {
        const data = await hideMaReportPlAne(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateMaReportPlAneController = async (req, res) => {
    try {
        const data = await updateMaReportPlAne(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}