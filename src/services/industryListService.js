import {AccountingJournal, ClientManager, IndustryList} from "../postgres/postgres.js";

export const getAllIndustryList = async () => {

    try {
        let data = await IndustryList.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: [
                {model: ClientManager, as: "clientManagers"},
                {model : AccountingJournal , as : "accountingJournals"}
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

export const createIndustryList = async (value) => {
    try {
        let data = await IndustryList.create(value);
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


export const updateIndustryList = async (id, value) => {
    try {
        const data = await IndustryList.findOne({where: {id: id}});
        if (data) {
            await IndustryList.update(value, {where: {id: id}})
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

export const hideIndustryList = async (id) => {
    try {
        const data = await IndustryList.findOne({where: {id: id}});
        if (data) {
            await IndustryList.update({show: false}, {where: {id: id}})
            const value = await IndustryList.findOne({where: {id: data.id}});
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