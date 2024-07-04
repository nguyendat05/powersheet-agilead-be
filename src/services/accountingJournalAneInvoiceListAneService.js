import {AccountingJournalAne, AccountingJournalAneInvoiceListAne, InvoiceListAne} from "../postgres/postgres.js";

export const createAccountingJournalAneInvoiceListAne = async (value) => {
    try {
        const data = await AccountingJournalAneInvoiceListAne.create(value)
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

export const getAllAccountingJournalAneInvoiceListAne = async () => {
    try {
        const data = await AccountingJournalAneInvoiceListAne.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: [
                {model : InvoiceListAne , as : "invoiceListAgl"},
                { model : AccountingJournalAne, as : "accountingJournalAgl"}
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

export const hideAccountingJournalAneInvoiceListAne = async (id) => {
    try {
        const data = await AccountingJournalAneInvoiceListAne.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalAneInvoiceListAne.update({show: false}, {where: {id: id}})
            const value = await AccountingJournalAneInvoiceListAne.findOne({where: {id: data.id}});
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

export const updateAccountingJournalAneInvoiceListAne = async (id, value) => {
    try {
        const data = await AccountingJournalAneInvoiceListAne.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalAneInvoiceListAne.update(value, {where: {id: id}})
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

