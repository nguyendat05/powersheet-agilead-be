import {MaReportCashPlanning, MaReportEquity} from "../postgres/postgres.js";


export const getAllMaReportEquity = async () => {

    try {
        let data = await MaReportEquity.findAll(
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
            msg: "Lỗi máy chủ ",
            error: error
        }
    }
};


export const createMaReportEquity = async (value) => {
    try {
        const data = await MaReportEquity.create(value)
        return {
            msg: data ? "Thành công" : "Lỗi thêm dữ liệu",
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }
    }
};


export const updateMaReportEquity = async (id, value) => {
    try {
        const data = await MaReportEquity.findOne({where: {id: id}});
        if (data) {
            await MaReportEquity.update(value, {where: {id: id}})
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

export const hideMaReportEquity = async (id) => {
    try {
        const data = await MaReportEquity.findOne({where: {id: id}});
        if (data) {
            await MaReportEquity.update({show: false}, {where: {id: id}})
            const value = await MaReportEquity.findOne({where: {id: data.id}});
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