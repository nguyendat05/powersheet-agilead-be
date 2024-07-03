import {TaskManager, TeamList} from "../postgres/postgres.js";

export const createTaskManager = async (value) => {
    try {
        const data = await TaskManager.create(value)
        return {
            msg: data ? "thêm dữ liệu thành công" : "Lỗi thêm dữ liệu",
            data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",

        }
    }
};

export const getTaskManager= async () => {
    try {
        const data = await TaskManager.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
            include : {model : TeamList , as : "teamList"}
        })
        return {
            msg: data ? 'Lấy taskManager thành công' : 'Lỗi lấy taskManager ',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideTaskManager = async (id) => {
    try {
        const data = await TaskManager.findOne({where: {id: id}});
        if (data) {
            await TaskManager.update({show: false}, {where: {id: id}})
            const value = await TaskManager.findOne({where: {id: data.id}});
            return {
                msg: "Đã thay dổi show = fasle thành công",
                data: value
            }
        }
        else {
            return {
                msg: "Không tìm thấy đối tượng phù hợp để thay đổi",
                id: id
            }
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }
    }
}

export const updateTaskManager = async (id, value) => {
    try {
        const data = await TaskManager.findOne({where: {id: id}});
        if (data) {
            await TaskManager.update(value, {where: {id: id}})
            return {
                msg: "Đã cập nhật thành công",
                data: {...value, id}
            }
        } else {
            return {
                msg: "Không tìm thấy đối tượng phù hợp để sửa"
            }
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }
    }
}

