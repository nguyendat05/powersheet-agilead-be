import {AccountingJournal, InvoiceList, KmfKmnsList} from "../postgres/postgres.js";

export const getAllKmfKmnsList = async () => {

    try {
        let data = await KmfKmnsList.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: {model: AccountingJournal, as: "accountingJournals"}
        });
        return {
            msg: data ? "Thành công" : "Thất bại",
            data: data
        }
    } catch (error) {
        return {
            msg: "Lỗi máy chủ",
            error: error
        }
    }
};

export const createKmfKmnsList = async (value) => {
    try {
        const data = await KmfKmnsList.create(value)
        return {
            msg: data ? "Thêm dữ liệu thành công" : "Lỗi thêm dữ liệu",
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",

        }
    }
};


export const updateKmfKmnsList = async (id, value) => {
    try {
        const data = await KmfKmnsList.findOne({where: {id: id}});
        if (data) {
            await KmfKmnsList.update(value, {where: {id: id}})
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
};

export const hideKmfKmnsList = async (id) => {
    try {
        const data = await KmfKmnsList.findOne({where: {id: id}});
        if (data) {
            await KmfKmnsList.update({show: false}, {where: {id: id}})
            const value = await KmfKmnsList.findOne({where: {id: data.id}});
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
};