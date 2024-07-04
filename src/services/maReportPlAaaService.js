import {MaReportPlAaa} from "../postgres/postgres.js";

export const createMaReportPlAaa = async (value) => {
    try {
        const data = await MaReportPlAaa.create(value)
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

export const getMaReportPlAaa= async () => {
    try {
        const data = await MaReportPlAaa.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
        })
        return {
            msg: data ? 'Lấy MaReportPlAaa thành công' : 'Lỗi lấy MaReportPlAaa',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideMaReportPlAaa = async (id) => {
    try {
        const data = await MaReportPlAaa.findOne({where: {id: id}});
        if (data) {
            await MaReportPlAaa.update({show: false}, {where: {id: id}})
            const value = await MaReportPlAaa.findOne({where: {id: data.id}});
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

export const updateMaReportPlAaa = async (id, value) => {
    try {
        const data = await MaReportPlAaa.findOne({where: {id: id}});
        if (data) {
            await MaReportPlAaa.update(value, {where: {id: id}})
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

