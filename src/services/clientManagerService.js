import {
    AccountingJournal,
    ClientManager,
    ContractList,
    IndustryList,
    InvoiceList,
    ProductList
} from "../postgres/postgres.js";

export const getAllClientManager = async () => {
    try {
        let data = await ClientManager.findAll(
            {
                order: [["id", "DESC"]],
                where: {
                    show: true,
                },
                include : [
                    {model : ContractList , as :"contractLists" },
                    {model : IndustryList , as :"industryList" },
                    {model : InvoiceList , as :"invoiceLists" },
                    {model : AccountingJournal , as :"accountJournals" },
                ]
            }
        );
        return{
            msg: data ? "Thành công" : "Thất bại",
            data:data
        }
    } catch (error) {
        return {
            msg: "Lỗi máy chủ",
            error: error
        }
    }
};

export const createClientManager = async (value) => {
    try {
        let data = await ClientManager.create(value);
        return {
            msg: data ? "Thành công" : "Thất bại",
            data,
        };
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }
    }
};


export const updateClientManager =async (id, value) =>{
    try {
        const data = await ClientManager.findOne({where: {id: id}});
        if (data) {
            await ClientManager.update(value, {where: {id: id}})
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
};

export const hideClientManager = async (id) => {
    try {
        const data = await ClientManager.findOne({where: {id: id}});
        if (data) {
            await ClientManager.update({show: false}, {where: {id: id}})
            const value = await ClientManager.findOne({where: {id: data.id}});
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