import {LeavePhep, NhanVien} from "../postgres/postgres.js";

export const createLeavePhep = async (value) => {
    try {
        const data = await LeavePhep.create(value)
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

export const getLeavePhep= async () => {
    try {
        const data = await LeavePhep.findAll({
            include : [
                {model: NhanVien , as:"nhanvienDeNghi"},
                {model: NhanVien , as:"nhanvienQuanLyTrucTiep"},
            ]
        })
        return {
            msg: data ? 'Lấy leavePhep thành công' : 'Lỗi lấy leavePhep ',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideLeavePhep = async (id) => {
    try {
        const data = await LeavePhep.findOne({where: {id: id}});
        if (data) {
            await LeavePhep.update({show: false}, {where: {id: id}})
            const value = await LeavePhep.findOne({where: {id: data.id}});
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

export const updateLeavePhep = async (id, value) => {
    try {
        const data = await LeavePhep.findOne({where: {id: id}});
        if (data) {
            await LeavePhep.update(value, {where: {id: id}})
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

