import {AccountingJournalAneInvoiceListAne, InvoiceListAne} from "../postgres/postgres.js";

export const createInvoiceListAne= async (value) => {
    try {
        const data = await InvoiceListAne.create(value)
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

export const getInvoiceListAne = async () => {
    try {
        const data = await InvoiceListAne.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include:[
                {model : AccountingJournalAneInvoiceListAne , as : "accountingJournalAneInvoiceListAnes"}
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

export const hideInvoiceListAne = async (id) => {
    try {
        const data = await InvoiceListAne.findOne({where: {id: id}});
        if (data) {
            await InvoiceListAne.update({show: false}, {where: {id: id}})
            const value = await InvoiceListAne.findOne({where: {id: data.id}});
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

export const updateInvoiceListAne = async (id, value) => {
    try {
        const data = await InvoiceListAne.findOne({where: {id: id}});
        if (data) {
            await InvoiceListAne.update(value, {where: {id: id}})
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

