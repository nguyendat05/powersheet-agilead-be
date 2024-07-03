import {AccountingJournalInvoiceList, ClientManager, InvoiceDetail, InvoiceList} from "../postgres/postgres.js";

export const createInvoiceList= async (value) => {
    try {
        const data = await InvoiceList.create(value)
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

export const getInvoiceList= async () => {
    try {
        const data = await InvoiceList.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include:[
                {model:AccountingJournalInvoiceList,as :"accountingJournalInvoiceLists" },
                {model:InvoiceDetail,as :"invoiceDetails" },
                {model:ClientManager,as :"clientManager" },
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

export const hideInvoiceList = async (id) => {
    try {
        const data = await InvoiceList.findOne({where: {id: id}});
        if (data) {
            await InvoiceList.update({show: false}, {where: {id: id}})
            const value = await InvoiceList.findOne({where: {id: data.id}});
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

export const updateInvoiceList = async (id, value) => {
    try {
        const data = await InvoiceList.findOne({where: {id: id}});
        if (data) {
            await InvoiceList.update(value, {where: {id: id}})
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

