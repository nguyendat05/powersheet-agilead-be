import {MaReportEquity, MaReportProfitLossAS} from "../postgres/postgres.js";

export const getAllMaReportProfitLossAS = async () => {
    try {
        let data = await MaReportProfitLossAS.findAll(
            {
                order: [["id", "DESC"]],
                where: {
                    show: true,
                },
            }
        );
        return{
            msg:data ?  "Thành công" : "Thất bại",
            data
        }
    } catch (error) {
        return {
            msg: "Lỗi máy chủ" ,
            error: error
        }
    }
};


export const createMaReportProfitLossAS = async (value) => {
    try {
        const data = await MaReportProfitLossAS.create(value)
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


export const updateMaReportProfitLossAS =async (id, value) => {
    try {
        const data = await MaReportProfitLossAS.findOne({where: {id: id}});
        if (data) {
            await MaReportProfitLossAS.update(value, {where: {id: id}})
            return {
                msg: "Thành công",
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

export const hideMaReportProfitLossAS = async (id) => {
    try {
        const data = await MaReportProfitLossAS.findOne({where: {id: id}});
        if (data) {
            await MaReportProfitLossAS.update({show: false}, {where: {id: id}})
            const value = await MaReportProfitLossAS.findOne({where: {id: data.id}});
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