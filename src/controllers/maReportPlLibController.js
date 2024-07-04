import {
    createMaReportPlLib,
    getMaReportPlLib,
    hideMaReportPlLib,
    updateMaReportPlLib
} from "../services/maReportPlLibService.js";


export const createMaReportPlLibController = async (req, res) => {
    try {
        const data = await createMaReportPlLib(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getMaReportPlLibController = async (req, res) => {
    try {
        const data = await getMaReportPlLib();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideMaReportPlLibController = async (req, res) => {
    try {
        const data = await hideMaReportPlLib(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateMaReportPlLibController = async (req, res) => {
    try {
        const data = await updateMaReportPlLib(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}