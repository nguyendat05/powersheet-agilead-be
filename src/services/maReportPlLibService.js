import { MaReportPlLib} from "../postgres/postgres.js";

export const createMaReportPlLib = async (value) => {
    try {
        const data = await MaReportPlLib.create(value)
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

export const getMaReportPlLib= async () => {
    try {
        const data = await MaReportPlLib.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
        })
        return {
            msg: data ? 'Lấy MaReportPlLib thành công' : 'Lỗi lấy MaReportPlLib',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideMaReportPlLib = async (id) => {
    try {
        const data = await MaReportPlLib.findOne({where: {id: id}});
        if (data) {
            await MaReportPlLib.update({show: false}, {where: {id: id}})
            const value = await MaReportPlLib.findOne({where: {id: data.id}});
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

export const updateMaReportPlLib = async (id, value) => {
    try {
        const data = await MaReportPlLib.findOne({where: {id: id}});
        if (data) {
            await MaReportPlLib.update(value, {where: {id: id}})
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

