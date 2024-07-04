import {
    createMaReportWcAll,
    getAllMaReportWcAll,
    hideMaReportWcAll,
    updateMaReportWcAll
} from "../services/maReportWcAllService.js";


export const getAllMaReportWcAllController = async (req, res) => {
    try {
        const data = await getAllMaReportWcAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};
export const createMaReportWcAllController = async (req, res) => {
    try {
        const data = await createMaReportWcAll(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};
export const hideMaReportWcAllController = async (req , res) => {
    try {
        const data = await hideMaReportWcAll(req.params.id);
        if (data.msg === "Đã ẩn thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateMaReportWcAllController = async (req , res) => {
    try {
        const data = await updateMaReportWcAll(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}