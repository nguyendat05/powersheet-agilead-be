import {MaReportWcAll, } from "../postgres/postgres.js";

export const getAllMaReportWcAll = async () => {
    try {
        const data = await MaReportWcAll.findAll(
            {
                order: [["id", "DESC"]],
                where: {
                    show: true
                },
            }
        )
        return {
            msg:  "Lấy maReportWorking thành công",
            data
        }
    } catch (error) {
        return {
            error : error,
            msg: "Lỗi lâý dữ liệu",
        }

    }
};
export const createMaReportWcAll = async (value )=> {
    try {
        const data = await MaReportWcAll.create(value)
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

export const hideMaReportWcAll  = async (id) => {
    try {
        const data = await MaReportWcAll.findOne({where: {id: id}});
        if (data) {
            await MaReportWcAll.update({ show: false },  {
                where: { id: id },
            })
            const value = await MaReportWcAll.findOne({where: {id: data.id}});
            return {
                msg : "Đã ẩn thành công",
                data : value
            }
        } else {
            return {
                msg : "Không tìm thấy đối tượng phù hợp để ẩn",
                id : id
            }
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }
    }
}

export const updateMaReportWcAll = async ( id , value) => {
    try {
        const data = await MaReportWcAll.findOne({where: {id: id}});
        if (data) {
            await MaReportWcAll.update( value , {where: {id: id}})
            return {
                msg : "Đã cập nhật thành công",
                data : {...value, id}
            }
        } else {
            return {
                msg : "Không tìm thấy đối tượng phù hợp để sửa"
            }
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }
    }
}
