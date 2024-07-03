import {
    createReportingLine,
    getReportingLine,
    hideReportingLine,
    updateReportingLine
} from "../services/reportingLineService.js";


export const createReportingLineController = async (req, res) => {
    try {
        const data = await createReportingLine(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getReportingLineController = async (req, res) => {
    try {
        const data = await getReportingLine();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideReportingLineController = async (req, res) => {
    try {
        const data = await hideReportingLine(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateReportingLineController= async (req, res) => {
    try {
        const data = await updateReportingLine(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}