import {
    createMaReportPlOs,
    getMaReportPlOs,
    hideMaReportPlOs,
    updateMaReportPlOs
} from "../services/maReportPlOsService.js";


export const createMaReportPlOsController = async (req, res) => {
    try {
        const data = await createMaReportPlOs(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getMaReportPlOsController = async (req, res) => {
    try {
        const data = await getMaReportPlOs();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideMaReportPlOsController = async (req, res) => {
    try {
        const data = await hideMaReportPlOs(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateMaReportPlOsController = async (req, res) => {
    try {
        const data = await updateMaReportPlOs(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}