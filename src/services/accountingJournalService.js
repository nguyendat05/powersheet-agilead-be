import {
    AccountingJournal,
    AccountingJournalContractList,
    AccountingJournalInvoiceList,
    AccountingJournalProductList,
    CashAccount, ClientManager,
    DivisionList,
    IndustryList,
    KmfKmnsList,
    NhanVien,
    ProjectList,
    SupplierList,
    TeamList, VasAccountList
} from "../postgres/postgres.js";

export const createAccountingJournal = async (value) => {
    try {
        const data = await AccountingJournal.create(value)
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

export const getAllAccountingJournal = async () => {
    try {
        const data = await AccountingJournal.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: [
                {model: AccountingJournalProductList, as: "accountingJournalProductLists"},
                {model: AccountingJournalInvoiceList, as: "accountingJournalInvoiceLists"},
                {model: AccountingJournalContractList, as: "accountingJournalContractLists"},
                {model: NhanVien, as: "nhanVien"},
                {model: KmfKmnsList, as: "kmfKmmsList"},
                {model: IndustryList, as: "industryList"},
                {model : DivisionList , as : "divisionList"},
                {model : TeamList , as : "teamList"},
                {model : CashAccount , as : "cashAccount"},
                {model : ProjectList , as : "projectList"},
                {model : SupplierList , as : "supplierList"},
                {model : ClientManager , as : "clientManager"},
                {model : VasAccountList , as : "vasAccountListNo"},
                {model : VasAccountList , as : "vasAccountListCo"},

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

export const hideAccountingJournal = async (id) => {
    try {
        const data = await AccountingJournal.findOne({where: {id: id}});
        if (data) {
            await AccountingJournal.update({show: false}, {where: {id: id}})
            const value = await AccountingJournal.findOne({where: {id: data.id}});
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

export const updateAccountingJournal = async (id, value) => {
    try {
        const data = await AccountingJournal.findOne({where: {id: id}});
        if (data) {
            await AccountingJournal.update(value, {where: {id: id}})
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

