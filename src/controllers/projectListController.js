import {createProjectList, getProjectList, hideProjectList, updateProjectList} from "../services/projectListService.js";


export const createProjectListController = async (req, res) => {
    try {
        const data = await createProjectList(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getProjectListController = async (req, res) => {
    try {
        const data = await getProjectList();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideProjectListController = async (req, res) => {
    try {
        const data = await hideProjectList(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateProjectListController = async (req, res) => {
    try {
        const data = await updateProjectList(req.params.id , req.body);
        if (data.msg === "Thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}