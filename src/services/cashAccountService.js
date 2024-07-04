import {AccountingJournalAgl, AccountingJournalAne, CashAccount} from "../postgres/postgres.js";


export const getAllCashAccount = async () => {
    try {
        let data = await CashAccount.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include:[
                {model : AccountingJournalAne , as : "accountingJournalAnes"},
                {model : AccountingJournalAgl , as : "accountingJournalAgls"},
                ]
        });

        return{
            msg: data ? "Thành công" : "Thất bại",
            data:data
        }
    } catch (error) {
        return {
            msg: " Lỗi máy chủ",
            error: error
        }
    }
};

export const createCashAccount = async (value) => {
    try {
        let data = await CashAccount.create(value);
        return {
            msg: data ? "Thành công" : "Thất bại",
            data : data,
        };
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        };
    }
};
export const hideCashAccount = async (id) => {
    try {
        const data = await CashAccount.findOne({where: {id: id}});
        if (data) {
            await CashAccount.update({show: false}, {where: {id: id}})
            const value = await CashAccount.findOne({where: {id: data.id}});
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
};
export const updateCashAccount = async (id, value) =>{
    try {
        const data = await CashAccount.findOne({where: {id: id}});
        if (data) {
            await CashAccount.update(value, {where: {id: id}})
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
};