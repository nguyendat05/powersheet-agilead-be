import {createTaskManager, getTaskManager, hideTaskManager, updateTaskManager} from "../services/taskManagerService.js";


export const createTaskManagerController = async (req, res) => {
    try {
        const data = await createTaskManager(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getTaskManagerController = async (req, res) => {
    try {
        const data = await getTaskManager();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideTaskManagerController = async (req, res) => {
    try {
        const data = await hideTaskManager(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateTaskManagerController = async (req, res) => {
    try {
        const data = await updateTaskManager(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}