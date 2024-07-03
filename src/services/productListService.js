import {AccountingJournalProductList, ContractDetail, InvoiceDetail, ProductList} from "../postgres/postgres.js";

export const createProductList = async (value) => {
    try {
        const data = await ProductList.create(value)
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

export const getProductList = async () => {
    try {
        const data = await ProductList.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
            include: [
                {model: AccountingJournalProductList, as: "accountingJournalProductLists"},
                {model: InvoiceDetail , as : "invoiceDetails"},
                {model: ContractDetail , as : "contractDetails"},
            ]
        });
        return {
            msg: data ? 'Lấy productList thành công' : 'Lỗi lấy productList  ',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideProductList = async (id) => {
    try {
        const data = await ProductList.findOne({where: {id: id}});
        if (data) {
            await ProductList.update({show: false}, {where: {id: id}})
            const value = await ProductList.findOne({where: {id: data.id}});
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

export const updateProductList = async (id, value) => {
    try {
        const data = await ProductList.findOne({where: {id: id}});
        if (data) {
            await ProductList.update(value, {where: {id: id}})
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
}

