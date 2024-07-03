import {ClientManager, ContractDetail, ContractList} from "../postgres/postgres.js";

export const getAllContractList = async () => {

    try {
        let data = await ContractList.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: [
                {model: ClientManager, as: 'clientManager'},
                {model: ContractDetail , as : "contractDetails"}],
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

export const createContractList = async (value) => {
    try {
        let data = await ContractList.create(value);
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


export const updateContractList = async (id, value) => {
    try {
        const data = await ContractList.findOne({where: {id: id}});
        if (data) {
            await ContractList.update(value, {where: {id: id}})
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

export const hideContractList = async (id) => {
    try {
        const data = await ContractList.findOne({where: {id: id}});
        if (data) {
            await ContractList.update({show: false}, {where: {id: id}})
            const value = await ContractList.findOne({where: {id: data.id}});
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