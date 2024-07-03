import {KmfKmnsList, MaReportCashPlanning} from "../postgres/postgres.js";


export const getAllMaReportCashPlanning = async () => {

    try {
        let data = await MaReportCashPlanning.findAll(
            {
                order: [["id", "DESC"]],
                where: {
                    show: true,
                },
            }
        );
        return {
            msg: data ? "Thành công" : "Thất bại",
            data
        }
    } catch (error) {
        return {
            msg: "Lỗi máy chủ",
            error: error
        }
    }
};


export const createMaReportCashPlanning = async (value) => {
    try {
        const data = await MaReportCashPlanning.create(value)
        return {
            msg: data ? "Thêm dữ liệu thành công" : "Lỗi thêm dữ liệu",
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",

        }
    }
};


export const updateMaReportCashPlanning = async (id, value) => {
    try {
        const data = await MaReportCashPlanning.findOne({where: {id: id}});
        if (data) {
            await MaReportCashPlanning.update(value, {where: {id: id}})
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
};

export const hideMaReportCashPlanning = async (id) => {
    try {
        const data = await MaReportCashPlanning.findOne({where: {id: id}});
        if (data) {
            await MaReportCashPlanning.update({show: false}, {where: {id: id}})
            const value = await MaReportCashPlanning.findOne({where: {id: data.id}});
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