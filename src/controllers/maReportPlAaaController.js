import {
    createMaReportPlAaa,
    getMaReportPlAaa,
    hideMaReportPlAaa,
    updateMaReportPlAaa
} from "../services/maReportPlAaaService.js";


export const createMaReportPlAaaController = async (req, res) => {
    try {
        const data = await createMaReportPlAaa(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getMaReportPlAaaController = async (req, res) => {
    try {
        const data = await getMaReportPlAaa();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideMaReportPlAaaController = async (req, res) => {
    try {
        const data = await hideMaReportPlAaa(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateMaReportPlAaaController = async (req, res) => {
    try {
        const data = await updateMaReportPlAaa(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}