import {AccountingJournal, AccountingJournalInvoiceList, InvoiceList} from "../postgres/postgres.js";

export const createAccountingJournalInvoiceList = async (value) => {
    try {
        const data = await AccountingJournalInvoiceList.create(value)
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

export const getAllAccountingJournalInvoiceList= async () => {
    try {
        const data = await AccountingJournalInvoiceList.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: [
                {model : InvoiceList , as : "invoiceList"},
                {model : AccountingJournal , as : "accountingJournal"},
            ]
        })
        return {
            msg: data ? 'Lấy accountingJournalInvoiceList thành công' : 'Lỗi lấy accountingJournalInvoiceList',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideAccountingJournalInvoiceList = async (id) => {
    try {
        const data = await AccountingJournalInvoiceList.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalInvoiceList.update({show: false}, {where: {id: id}})
            const value = await AccountingJournalInvoiceList.findOne({where: {id: data.id}});
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

export const updateAccountingJournalInvoiceList= async (id, value) => {
    try {
        const data = await AccountingJournalInvoiceList.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalInvoiceList.update(value, {where: {id: id}})
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

