import { MaReportCashPlanningAgl} from "../postgres/postgres.js";


export const getAllMaReportCashPlanningAgl = async () => {

    try {
        let data = await MaReportCashPlanningAgl.findAll(
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


export const createMaReportCashPlanningAgl = async (value) => {
    try {
        const data = await MaReportCashPlanningAgl.create(value)
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


export const updateMaReportCashPlanningAgl = async (id, value) => {
    try {
        const data = await MaReportCashPlanningAgl.findOne({where: {id: id}});
        if (data) {
            await MaReportCashPlanningAgl.update(value, {where: {id: id}})
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

export const hideMaReportCashPlanningAgl = async (id) => {
    try {
        const data = await MaReportCashPlanningAgl.findOne({where: {id: id}});
        if (data) {
            await MaReportCashPlanningAgl.update({show: false}, {where: {id: id}})
            const value = await MaReportCashPlanningAgl.findOne({where: {id: data.id}});
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