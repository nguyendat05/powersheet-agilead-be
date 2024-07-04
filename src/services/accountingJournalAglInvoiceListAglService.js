import {AccountingJournalAgl, AccountingJournalAglInvoiceListAgl, InvoiceListAgl} from "../postgres/postgres.js";

export const createAccountingJournalAglInvoiceListAgl = async (value) => {
    try {
        const data = await AccountingJournalAglInvoiceListAgl.create(value)
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

export const getAllAccountingJournalAglInvoiceListAgl= async () => {
    try {
        const data = await AccountingJournalAglInvoiceListAgl.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: [
                {model : InvoiceListAgl , as : "invoiceListAgl"},
                { model : AccountingJournalAgl , as : "accountingJournalAgl"}
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

export const hideAccountingJournalAglInvoiceListAgl = async (id) => {
    try {
        const data = await AccountingJournalAglInvoiceListAgl.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalAglInvoiceListAgl.update({show: false}, {where: {id: id}})
            const value = await AccountingJournalAglInvoiceListAgl.findOne({where: {id: data.id}});
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

export const updateAccountingJournalAglInvoiceListAgl= async (id, value) => {
    try {
        const data = await AccountingJournalAglInvoiceListAgl.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalAglInvoiceListAgl.update(value, {where: {id: id}})
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

