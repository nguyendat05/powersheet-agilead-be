import {AccountingJournalAgl, AccountingJournalAglContractListAgl, ContractListAgl} from "../postgres/postgres.js";

export const createAccountingJournalAglContractListAgl = async (value) => {
    try {
        const data = await AccountingJournalAglContractListAgl.create(value)
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

export const getAllAccountingJournalAglContractListAgl= async () => {
    try {
        const data = await AccountingJournalAglContractListAgl.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: [
                {model : ContractListAgl , as : "contractListAgl"},
                {model : AccountingJournalAgl , as : "accountingJournalAgl"},
            ]
        })
        return {
            msg: data ? 'Lấy accountingJournalContractList thành công' : 'Lỗi lấy accountingJournalContractList',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideAccountingJournalAglContractListAgl = async (id) => {
    try {
        const data = await AccountingJournalAglContractListAgl.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalAglContractListAgl.update({show: false}, {where: {id: id}})
            const value = await AccountingJournalAglContractListAgl.findOne({where: {id: data.id}});
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

export const updateAccountingJournalAglContractListAgl = async (id, value) => {
    try {
        const data = await AccountingJournalAglContractListAgl.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalAglContractListAgl.update(value, {where: {id: id}})
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

