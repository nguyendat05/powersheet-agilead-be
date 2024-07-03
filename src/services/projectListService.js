import {AccountingJournal, ProjectList} from "../postgres/postgres.js";

export const createProjectList = async (value) => {
    try {
        const data = await ProjectList.create(value)
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

export const getProjectList = async () => {
    try {
        const data = await ProjectList.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
            include: {model: AccountingJournal , as:"accountingJournals"}
        });
        return {
            msg: data ? 'Lấy projectList thành công' : 'Lỗi lấy projectList ',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideProjectList = async (id) => {
    try {
        const data = await ProjectList.findOne({where: {id: id}});
        if (data) {
            await ProjectList.update({show: false}, {where: {id: id}})
            const value = await ProjectList.findOne({where: {id: data.id}});
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

export const updateProjectList = async (id, value) => {
    try {
        const data = await ProjectList.findOne({where: {id: id}});
        if (data) {
            await ProjectList.update(value, {where: {id: id}})
            return {
                msg: "Thành công",
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

