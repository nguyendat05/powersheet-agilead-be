import {AccountingJournal, VasAccountList} from "../postgres/postgres.js";

export const createVasAccountList= async (value) => {
    try {
        const data = await VasAccountList.create(value)
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

export const getVasAccountList= async () => {
    try {
        const data = await VasAccountList.findAll({
            include:[
                {model:AccountingJournal,as :"accountJournalNos" },
                {model:AccountingJournal,as :"accountJournalCos" },
            ]
        })
        return {
            msg: data ? 'Lấy vasAccountList thành công' : 'Lỗi lấy vasAccountList ',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideVasAccountList = async (id) => {
    try {
        const data = await VasAccountList.findOne({where: {id: id}});
        if (data) {
            await VasAccountList.update({show: false}, {where: {id: id}})
            const value = await VasAccountList.findOne({where: {id: data.id}});
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

export const updateVasAccountList = async (id, value) => {
    try {
        const data = await VasAccountList.findOne({where: {id: id}});
        if (data) {
            await VasAccountList.update(value, {where: {id: id}})
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

