import {MaReportProfitLossHvaV1} from "../postgres/postgres.js";

export const getAllMaReportProfitLossHvaV1 = async () => {
    try {
        const data = await MaReportProfitLossHvaV1.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
        })
        return {
            msg: "Lấy dữ liệu thành công",
            data
        }
    } catch (error) {
        return {
            error: error,
            msg:"Lỗi máy chủ"
        }
    }
};
export const createMaReportProfitLossHvaV1 = async (value )=> {
    try {
        const data =  await MaReportProfitLossHvaV1.create(value)
        return {
            msg: data ? "Thêm dữ liệu thành công" :"Lỗi thêm dữ liệu",
            data
        }
    } catch (error) {
        return {
            error: error,
            msg:"Lỗi máy chủ",
        }
    }
};

export const hideMaReportProfitLossHvaV1 = async (id) => {
    try {
        const data = await MaReportProfitLossHvaV1.findOne({where: {id: id}});
        if (data) {
            await MaReportProfitLossHvaV1.update({ show: false },  {
                where: { id: id },
            })
            const value = await MaReportProfitLossHvaV1.findOne({where: {id: data.id}});
            return {
                msg : "Đã ẩn thành công",
                data : value
            }
        } else {
            return {
                msg : "Không tìm thấy đối tượng phù hợp để ẩn",
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

export const updateMaReportProfitLossHvaV1 = async ( id , value) => {
    try {
        let data = await MaReportProfitLossHvaV1.update(value,  {
            where: { id: id },
        });
        if(data) {
            return {
                msg: "Đã sửa thành công",
                data : {...value, id}
            }
        } else {
            return {
                msg :  "Lỗi không tìm thấy để sửa dữ liệu",
            };
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        };
    }
}
