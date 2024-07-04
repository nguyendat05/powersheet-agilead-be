import {AccountingJournalAneContractListAne, ContractListAne} from "../postgres/postgres.js";

export const getAllContractListAne = async () => {

    try {
        let data = await ContractListAne.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: [
                {model : AccountingJournalAneContractListAne , as : "accountingJournalAneContractListAnes"},
            ]

        });
        return {
            msg:  data ? "Thành công" : "Thất bại",
            data
        }
    } catch (error) {
        return {
            msg: "Lỗi máy chủ",
            error: error
        }
    }
};

export const createContractListAne = async (value) => {
    try {
        let data = await ContractListAne.create(value);
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


export const updateContractListAne = async (id, value) => {
    try {
        const data = await ContractListAne.findOne({where: {id: id}});
        if (data) {
            await ContractListAne.update(value, {where: {id: id}})
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

export const hideContractListAne = async (id) => {
    try {
        const data = await ContractListAne.findOne({where: {id: id}});
        if (data) {
            await ContractListAne.update({show: false}, {where: {id: id}})
            const value = await ContractListAne.findOne({where: {id: data.id}});
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