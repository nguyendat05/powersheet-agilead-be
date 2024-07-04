import {MaReportPlAgl} from "../postgres/postgres.js";

export const createMaReportPlAgl = async (value) => {
    try {
        const data = await MaReportPlAgl.create(value)
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

export const getMaReportPlAgl= async () => {
    try {
        const data = await MaReportPlAgl.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
        })
        return {
            msg: data ? 'Lấy MaReportPlAgl thành công' : 'Lỗi lấy MaReportPlAgl',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideMaReportPlAgl = async (id) => {
    try {
        const data = await MaReportPlAgl.findOne({where: {id: id}});
        if (data) {
            await MaReportPlAgl.update({show: false}, {where: {id: id}})
            const value = await MaReportPlAgl.findOne({where: {id: data.id}});
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

export const updateMaReportPlAgl = async (id, value) => {
    try {
        const data = await MaReportPlAgl.findOne({where: {id: id}});
        if (data) {
            await MaReportPlAgl.update(value, {where: {id: id}})
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

