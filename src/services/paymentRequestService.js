import {NhanVien, PaymentRequests, TeamList} from "../postgres/postgres.js";

export const createPaymentRequest = async (value) => {
    try {
        const data = await PaymentRequests.create(value)
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
export const getPaymentRequest = async () => {
    try {
        const data = await PaymentRequests.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
            include :[
                {model : NhanVien , as : "nhanvienDeNghi" },
                {model : NhanVien , as : "nhanvienKeToan"},
                {model : NhanVien , as : "nhanvienManager"},
                {model : NhanVien , as : "nhanvienGiamDoc"},
            ]
        });
        return {
            msg: data ? 'Lấy paymentRequest thành công' : 'Lỗi lấy paymentRequest  ',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hidePaymentRequest = async (id) => {
    try {
        const data = await PaymentRequests.findOne({where: {id: id}});
        if (data) {
            await PaymentRequests.update({show : false},{where: {id: data.id}})
            const value = await PaymentRequests.findOne({where: {id: data.id}});
            return {
                msg: "Đã ẩn thành công",
                data: value
            }
        } else {
            return {
                msg: "Không tìm thấy đối tượng phù hợp để ẩn",
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

export const updatePaymentRequest = async (id, value) => {
    try {
        const data = await PaymentRequests.findOne({where: {id: id}});
        if (data) {
            await PaymentRequests.update(value, {where: {id: id}})
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

