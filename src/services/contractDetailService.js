import {ContractDetail, ContractList, ProductList} from "../postgres/postgres.js";

export const getAllContractDetail = async () => {

    try {
        let data = await ContractDetail.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
            include: [
                {model: ContractList, as: 'contractList'},
                {model: ProductList, as: "productList"}],
        });
        return {
            msg : data ? "Thành công" : "Thất bại" ,
            data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ ",
        }
    }
};

export const createContractDetail = async (value) => {
    try {
        let data = await ContractDetail.create(value);
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


export const updateContractDetail = async (id, value) => {
    try {
        const data = await ContractDetail.findOne({where: {id: id}});
        if (data) {
            await ContractDetail.update(value, {where: {id: id}})
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

export const hideContractDetail = async (id) => {
    try {
        const data = await ContractDetail.findOne({where: {id: id}});
        if (data) {
            await ContractDetail.update({show: false}, {where: {id: id}})
            const value = await ContractDetail.findOne({where: {id: data.id}});
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