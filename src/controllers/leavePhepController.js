import {createLeavePhep, getLeavePhep, hideLeavePhep, updateLeavePhep} from "../services/leavePhepService.js";


export const createLeavePhepController = async (req, res) => {
    try {
        const data = await createLeavePhep(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getLeavePhepController = async (req, res) => {
    try {
        const data = await getLeavePhep();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideLeavePhepController = async (req, res) => {
    try {
        const data = await hideLeavePhep(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateLeavePhepController = async (req, res) => {
    try {
        const data = await updateLeavePhep(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}