import {createTeamList, getTeamList, hideTeamList, updateTeamList} from "../services/teamListService.js";


export const createTeamListController = async (req, res) => {
    try {
        const data = await createTeamList(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getTeamListController = async (req, res) => {
    try {
        const data = await getTeamList();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hideTeamListController = async (req, res) => {
    try {
        const data = await hideTeamList(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateTeamListController = async (req, res) => {
    try {
        const data = await updateTeamList(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}