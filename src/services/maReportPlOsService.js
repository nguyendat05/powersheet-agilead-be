import {MaReportPlOs} from "../postgres/postgres.js";

export const createMaReportPlOs = async (value) => {
    try {
        const data = await MaReportPlOs.create(value)
        return {
            msg: data ? "thêm dữ liệu thành công" : "Lỗi thêm dữ liệu",
            data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",

        }
    }
};

export const getMaReportPlOs= async () => {
    try {
        const data = await MaReportPlOs.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
        })
        return {
            msg: data ? 'Lấy MaReportPlOs thành công' : 'Lỗi lấy MaReportPlOs',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideMaReportPlOs = async (id) => {
    try {
        const data = await MaReportPlOs.findOne({where: {id: id}});
        if (data) {
            await MaReportPlOs.update({show: false}, {where: {id: id}})
            const value = await MaReportPlOs.findOne({where: {id: data.id}});
            return {
                msg: "Đã thay dổi show = fasle thành công",
                data: value
            }
        }
        else {
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

export const updateMaReportPlOs = async (id, value) => {
    try {
        const data = await MaReportPlOs.findOne({where: {id: id}});
        if (data) {
            await MaReportPlOs.update(value, {where: {id: id}})
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

