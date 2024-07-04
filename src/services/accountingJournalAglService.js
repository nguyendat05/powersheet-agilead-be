import {
    AccountingJournalAgl, AccountingJournalAglContractListAgl, AccountingJournalAglInvoiceListAgl,
    CashAccount,
    DivisionList,
    KmfKmnsList,
    NhanVien,
    TeamList, VasAccountList
} from "../postgres/postgres.js";

export const createAccountingJournalAgl = async (value) => {
    try {
        const data = await AccountingJournalAgl.create(value)
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

export const getAllAccountingJournalAgl = async () => {
    try {
        const data = await AccountingJournalAgl.findAll({
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
                {model : AccountingJournalAglContractListAgl , as : "accountingJournalAglContractListAgls"},
                {model : AccountingJournalAglInvoiceListAgl , as : "accountingJournalAglInvoiceListAgls"},

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

export const hideAccountingJournalAgl = async (id) => {
    try {
        const data = await AccountingJournalAgl.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalAgl.update({show: false}, {where: {id: id}})
            const value = await AccountingJournalAgl.findOne({where: {id: data.id}});
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

export const updateAccountingJournalAgl = async (id, value) => {
    try {
        const data = await AccountingJournalAgl.findOne({where: {id: id}});
        if (data) {
            await AccountingJournalAgl.update(value, {where: {id: id}})
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

