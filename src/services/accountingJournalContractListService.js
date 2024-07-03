import {AccountingJournal, AccountingJournalContractList, ContractList} from "../postgres/postgres.js";

export const createAccountingJournalContractList = async (value) => {
    try {
        const data = await AccountingJournalContractList.create(value)
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

export const getAllAccountingJournalContractList= async () => {
    try {
        const data = await AccountingJournalContractList.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: [
                {model : ContractList , as : "contractList"},
                {model : AccountingJournal , as : "accountingJournal"},
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

export const hideAccountingJournalContractList = async (id) => {
    try {
        const data = await AccountingJournalContractList.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalContractList.update({show: false}, {where: {id: id}})
            const value = await AccountingJournalContractList.findOne({where: {id: data.id}});
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

export const updateAccountingJournalContractList= async (id, value) => {
    try {
        const data = await AccountingJournalContractList.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalContractList.update(value, {where: {id: id}})
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

