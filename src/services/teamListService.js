import {AccountingJournal, DivisionList, NhanVien, TaskManager, TeamList} from "../postgres/postgres.js";

export const createTeamList = async (value) => {
    try {
        const data = await TeamList.create(value)
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

export const getTeamList= async () => {
    try {
        const data = await TeamList.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
            include : [
                {model: DivisionList , as:"divisionList"},
                {model:AccountingJournal , as : 'accountingJournals'},
                {model:NhanVien , as : 'nhanviens'},
                {model:TaskManager , as : 'taskManagers'}
            ]
        })
        return {
            msg: data ? 'Lấy teamList thành công' : 'Lỗi lấy teamList ',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideTeamList = async (id) => {
    try {
        const data = await TeamList.findOne({where: {id: id}});
        if (data) {
            await TeamList.update({show: false}, {where: {id: id}})
            const value = await TeamList.findOne({where: {id: data.id}});
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

export const updateTeamList = async (id, value) => {
    try {
        const data = await TeamList.findOne({where: {id: id}});
        if (data) {
            await TeamList.update(value, {where: {id: id}})
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

