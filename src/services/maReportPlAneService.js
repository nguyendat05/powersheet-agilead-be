import { MaReportPlAne} from "../postgres/postgres.js";

export const createMaReportPlAne = async (value) => {
    try {
        const data = await MaReportPlAne.create(value)
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

export const getMaReportPlAne= async () => {
    try {
        const data = await MaReportPlAne.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
        })
        return {
            msg: data ? 'Lấy MaReportPlAne thành công' : 'Lỗi lấy MaReportPlAne',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideMaReportPlAne= async (id) => {
    try {
        const data = await MaReportPlAne.findOne({where: {id: id}});
        if (data) {
            await MaReportPlAne.update({show: false}, {where: {id: id}})
            const value = await MaReportPlAne.findOne({where: {id: data.id}});
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

export const updateMaReportPlAne = async (id, value) => {
    try {
        const data = await MaReportPlAne.findOne({where: {id: id}});
        if (data) {
            await MaReportPlAne.update(value, {where: {id: id}})
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

