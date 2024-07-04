import {NhanVien, ReportingLine} from "../postgres/postgres.js";

export const createReportingLine= async (value) => {
    try {
        const data = await ReportingLine.create(value)
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

export const getReportingLine = async () => {
    try {
        const data = await ReportingLine.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
            include:
            [
                {model: NhanVien , as:"nhanVien"},
                {model: NhanVien , as:"nhanVienQuanLyTrucTiep"},
                ]

        });
        return {
            msg: data ? 'Lấy reportingLine thành công' : 'Lỗi lấy reportingLine ',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideReportingLine = async (id) => {
    try {
        const data = await ReportingLine.findOne({where: {id: id}});
        if (data) {
            await ReportingLine.update({show: false}, {where: {id: id}})
            const value = await ReportingLine.findOne({where: {id: data.id}});
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

export const updateReportingLine = async (id, value) => {
    try {
        const data = await ReportingLine.findOne({where: {id: id}});
        if (data) {
            await ReportingLine.update(value, {where: {id: id}})
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

