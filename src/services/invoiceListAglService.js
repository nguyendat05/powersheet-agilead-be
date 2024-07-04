import {AccountingJournalAglInvoiceListAgl, InvoiceListAgl} from "../postgres/postgres.js";

export const createInvoiceListAgl= async (value) => {
    try {
        const data = await InvoiceListAgl.create(value)
        return {
            msg: data ? "Thêm dữ liệu thành công" : "Lỗi thêm dữ liệu",
            data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",

        }
    }
};

export const getInvoiceListAgl = async () => {
    try {
        const data = await InvoiceListAgl.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include:[
                {model : AccountingJournalAglInvoiceListAgl , as : "accountingJournalAglInvoiceListAgls"},
            ]
        })
        return {
            msg: data ? 'Lấy invoiceList thành công' : 'Lỗi lấy invoiceList ',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideInvoiceListAgl = async (id) => {
    try {
        const data = await InvoiceListAgl.findOne({where: {id: id}});
        if (data) {
            await InvoiceListAgl.update({show: false}, {where: {id: id}})
            const value = await InvoiceListAgl.findOne({where: {id: data.id}});
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

export const updateInvoiceListAgl = async (id, value) => {
    try {
        const data = await InvoiceListAgl.findOne({where: {id: id}});
        if (data) {
            await InvoiceListAgl.update(value, {where: {id: id}})
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

