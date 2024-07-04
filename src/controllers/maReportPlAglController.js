import {
    createMaReportPlAgl,
    getMaReportPlAgl,
    hideMaReportPlAgl,
    updateMaReportPlAgl
} from "../services/maReportPlAglService.js";

export const createMaReportPlAglController = async (req, res) => {
    try {
        const data = await createMaReportPlAgl(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getMaReportPlAglController = async (req, res) => {
    try {
        const data = await getMaReportPlAgl();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideMaReportPlAglController = async (req, res) => {
    try {
        const data = await hideMaReportPlAgl(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateMaReportPlAglController = async (req, res) => {
    try {
        const data = await updateMaReportPlAgl(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}