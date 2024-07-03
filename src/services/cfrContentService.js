import {AccountingJournal, CfrContent, DivisionList, TeamList} from "../postgres/postgres.js";

export const getAllCfrContent = async () => {
    try {
        let data = await CfrContent.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true,
            },
        });
        return {
            msg: "Thành công",
            data
        }
    } catch (error) {
        return {
            msg: "Lỗi máy chủ",
            error: error
        }
    }
};

export const createCfrContent = async (value) => {
    try {
        let data = await CfrContent.create(value);
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


export const updateCfrContent =async (id, value) =>{
    try {
        const data = await CfrContent.findOne({where: {id: id}});
        if (data) {
            await CfrContent.update(value, {where: {id: id}})
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

export const hideCfrContent = async (id) => {
    try {
        const data = await CfrContent.findOne({where: {id: id}});
        if (data) {
            await CfrContent.update({show: false}, {where: {id: id}})
            const value = await CfrContent.findOne({where: {id: data.id}});
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