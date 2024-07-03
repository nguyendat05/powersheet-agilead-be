import {MaReportProfitLossHvaV3} from "../postgres/postgres.js";

export const getAllMaReportProfitLossHvaV3 = async () => {
    try {
        const data = await MaReportProfitLossHvaV3.findAll({
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
export const createMaReportProfitLossHvaV3 = async (value )=> {
    try {
        const data =  await MaReportProfitLossHvaV3.create(value)
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

export const hideMaReportProfitLossHvaV3 = async (id) => {
    try {
        const data = await MaReportProfitLossHvaV3.findOne({where: {id: id}});
        if (data) {
            await MaReportProfitLossHvaV3.update({ show: false },  {
                where: { id: id },
            })
            const value = await MaReportProfitLossHvaV3.findOne({where: {id: data.id}});
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

export const updateMaReportProfitLossHvaV3 = async ( id , value) => {
    try {
        let data = await MaReportProfitLossHvaV3.update(value,  {
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
