import {
    AccountingJournalAne, AccountingJournalAneContractListAne, AccountingJournalAneInvoiceListAne,
    CashAccount,
    DivisionList,
    KmfKmnsList,
    NhanVien,
    TeamList, VasAccountList
} from "../postgres/postgres.js";

export const createAccountingJournalAne = async (value) => {
    try {
        const data = await AccountingJournalAne.create(value)
        return {
            msg: data ? "thêm dữ liệu thành công" : "Lỗi thêm dữ liệu",
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",

        }
    }
};

export const getAllAccountingJournalAne = async () => {
    try {
        const data = await AccountingJournalAne.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: [
                {model: NhanVien, as: "nhanVien"},
                {model: KmfKmnsList, as: "kmfKmmsList"},
                {model : DivisionList , as : "divisionList"},
                {model : TeamList , as : "teamList"},
                {model : CashAccount , as : "cashAccount"},
                {model : VasAccountList , as : "vasAccountListNo"},
                {model : VasAccountList , as : "vasAccountListCo"},
                {model : AccountingJournalAneContractListAne , as : "accountingJournalAneContractListAnes"},
                {model : AccountingJournalAneInvoiceListAne , as : "accountingJournalAneInvoiceListAnes"},
            ]
        })
        return {
            msg: data ? 'Lấy accountingJournal thành công' : 'Lỗi lấy accountingJournal',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideAccountingJournalAne = async (id) => {
    try {
        const data = await AccountingJournalAne.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalAne.update({show: false}, {where: {id: id}})
            const value = await AccountingJournalAne.findOne({where: {id: data.id}});
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

export const updateAccountingJournalAne = async (id, value) => {
    try {
        const data = await AccountingJournalAne.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalAne.update(value, {where: {id: id}})
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

