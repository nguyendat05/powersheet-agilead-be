import {AccountingJournal, SupplierList} from "../postgres/postgres.js";

export const createSupplierList = async (value) => {
    try {
        const data = await SupplierList.create(value)
        return {
            msg: data ? "thêm dữ liệu thành công" : "Lỗi thêm dữ liệu",
            data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",

        }
    }
};

export const getSupplierList= async () => {
    try {
        const data = await SupplierList.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
            include: {model: AccountingJournal , as:"accountingJournals"}
        });
        return {
            msg: data ? 'Lấy supplierList thành công' : 'Lỗi lấy supplierList ',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideSupplierList = async (id) => {
    try {
        const data = await SupplierList.findOne({where: {id: id}});
        if (data) {
            await SupplierList.update({show: false}, {where: {id: id}})
            const value = await SupplierList.findOne({where: {id: data.id}});
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

export const updateSupplierList = async (id, value) => {
    try {
        const data = await SupplierList.findOne({where: {id: id}});
        if (data) {
            await SupplierList.update(value, {where: {id: id}})
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

