import {InvoiceDetail, InvoiceList, ProductList} from "../postgres/postgres.js";

export const createInvoiceDetail= async (value) => {
    try {
        const data = await InvoiceDetail.create(value)
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

export const getInvoiceDetail= async () => {
    try {
        const data = await InvoiceDetail.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include:[
                {model:ProductList,as :"product" },
                {model:InvoiceList,as :"invoiceList" },
            ]
        })
        return {
            msg: data ? 'Lấy invoiceDetail thành công' : 'Lỗi lấy invoiceDetail ',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideInvoiceDetail = async (id) => {
    try {
        const data = await InvoiceDetail.findOne({where: {id: id}});
        if (data) {
            await InvoiceDetail.update({show: false}, {where: {id: id}})
            const value = await InvoiceDetail.findOne({where: {id: data.id}});
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

export const updateInvoiceDetail = async (id, value) => {
    try {
        const data = await InvoiceDetail.findOne({where: {id: id}});
        if (data) {
            await InvoiceDetail.update(value, {where: {id: id}})
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

