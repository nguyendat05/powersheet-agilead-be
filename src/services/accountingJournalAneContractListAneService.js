import {AccountingJournalAne, AccountingJournalAneContractListAne, ContractListAne} from "../postgres/postgres.js";

export const createAccountingJournalAneContractListAne = async (value) => {
    try {
        const data = await AccountingJournalAneContractListAne.create(value)
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

export const getAllAccountingJournalAneContractListAne= async () => {
    try {
        const data = await AccountingJournalAneContractListAne.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: [
                {model : ContractListAne , as : "contractListAne"},
                {model : AccountingJournalAne , as : "accountingJournalAne"},
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

export const hideAccountingJournalAneContractListAne = async (id) => {
    try {
        const data = await AccountingJournalAneContractListAne.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalAneContractListAne.update({show: false}, {where: {id: id}})
            const value = await AccountingJournalAneContractListAne.findOne({where: {id: data.id}});
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

export const updateAccountingJournalAneContractListAne = async (id, value) => {
    try {
        const data = await AccountingJournalAneContractListAne.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalAneContractListAne.update(value, {where: {id: id}})
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

