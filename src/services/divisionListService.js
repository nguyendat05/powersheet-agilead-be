import {AccountingJournalAgl, AccountingJournalAne, DivisionList, } from "../postgres/postgres.js";


export const getAllDivisionList = async () => {
    try {
        let data = await DivisionList.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include:[
                {model: AccountingJournalAne , as : "accountingJournalAnes"},
                {model: AccountingJournalAgl , as : "accountingJournalAgls"},
            ]
        });
        return {
            msg: "Thành công",
            data
        }
    } catch (error) {
        return {
            msg: "Lỗi máy chủ",
            error: error
        }
    }
};

export const createDivisionList = async (value) => {
    try {
        let data = await DivisionList.create(value);
        return {
            msg: data ? "Thành công" : "Thất bại",
            data : data,
        };
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        };
    }
};


export const updateDivisionList = async (id, value) => {
    try {
        const data = await DivisionList.findOne({where: {id: id}});
        if (data) {
            await DivisionList.update(value, {where: {id: id}})
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
};

export const hideDivisionList = async (id) => {
    try {
        const data = await DivisionList.findOne({where: {id: id}});
        if (data) {
            await DivisionList.update({show: false}, {where: {id: id}})
            const value = await DivisionList.findOne({where: {id: data.id}});
            return {
                msg: "Đã thay dổi show = fasle thành công",
                data: value
            }
        } else {
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
};