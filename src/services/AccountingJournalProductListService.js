import {AccountingJournal, AccountingJournalProductList, ProductList} from "../postgres/postgres.js";

export const createAccountingJournalProductList = async (value) => {
    try {
        const data = await AccountingJournalProductList.create(value)
        return {
            msg: data ? "thêm dữ liệu thành công" : "Lỗi thêm dữ liệu",
            data : data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",

        }
    }
};

export const getAllAccountingJournalProductList= async () => {
    try {
        const data = await AccountingJournalProductList.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: [
                {model : ProductList , as : "productList"},
                {model : AccountingJournal , as : "accountingJournal"},
            ]
        })
        return {
            msg: data ? 'Lấy accountingJournalProductList thành công' : 'Lỗi lấy accountingJournalProductList',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideAccountingJournalProductList = async (id) => {
    try {
        const data = await AccountingJournalProductList.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalProductList.update({show: false}, {where: {id: id}})
            const value = await AccountingJournalProductList.findOne({where: {id: data.id}});
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
}

export const updateAccountingJournalProductList= async (id, value) => {
    try {
        const data = await AccountingJournalProductList.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalProductList.update(value, {where: {id: id}})
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

