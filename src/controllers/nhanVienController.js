import {createNhanVien, hideNhanVien, getNhanVien, updateNhanVien} from "../services/nhanVienService.js";

export const createNhanVienController = async (req, res) => {
    try {
        const data = await createNhanVien(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getNhanVienController = async (req, res) => {
    try {
        const data = await getNhanVien();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideNhanVienController = async (req, res) => {
    try {
        const data = await hideNhanVien(req.params.id);
        if (data.msg === "Đã ẩn thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateNhanVienController = async (req, res) => {
    try {
        const data = await updateNhanVien(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}