import { MaReportProfitLossHL} from "../postgres/postgres.js";

export const getAllMaReportProfitLossHL = async () => {

    try {
        let data = await MaReportProfitLossHL.findAll(
            {
                order: [["id", "DESC"]],
                where: {
                    show: true,
                },
            }
        );
        return{
            msg: data ?  "Thành công" : "Thất bại",
            data
        }
    } catch (error) {
        return {
            msg: "Lỗi máy chủ" ,
            error: error
        }
    }
};

export const createMaReportProfitLossHL = async (value) => {
    try {
        const data = await MaReportProfitLossHL.create(value)
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


export const updateMaReportProfitLossHL =async (id, value) =>{
    try {
        const data = await MaReportProfitLossHL.findOne({where: {id: id}});
        if (data) {
            await MaReportProfitLossHL.update(value, {where: {id: id}})
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

export const hideMaReportProfitLossHL = async (id) => {
    try {
        const data = await MaReportProfitLossHL.findOne({where: {id: id}});
        if (data) {
            await MaReportProfitLossHL.update({show: false}, {where: {id: id}})
            const value = await MaReportProfitLossHL.findOne({where: {id: data.id}});
            return {
                msg: "Đã ẩn thành công",
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