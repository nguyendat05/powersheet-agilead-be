import {CfrProcess, DivisionList, NhanVien} from "../postgres/postgres.js";

export const getAllCfrProcess = async () => {
    try {
        let data = await CfrProcess.findAll(
            {
                order: [["id", "DESC"]],
                where: {
                    show: true,
                },
                include : [
                    {model : NhanVien , as : "nhanvienDeNghi"},
                    {model : NhanVien , as : "nhanvienDuyet"}
                ]
            }
        );
        return{
            msg: "Thành công",
            data
        }
    } catch (error) {
        return {
            msg: "Lỗi máy chủ" ,
            error: error
        }
    }
};

export const createCfrProcess = async (value) => {
    try {
        let data = await CfrProcess.create(value);
        return {
            msg: data ? "Thành công" : "Thất bại",
            data : data,
        };
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        };
    }
};


export const updateCfrProcess =async (id, value) =>{
    try {
        const data = await CfrProcess.findOne({where: {id: id}});
        if (data) {
            await CfrProcess.update(value, {where: {id: id}})
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

export const hideCfrProcess = async (id) => {
    try {
        const data = await CfrProcess.findOne({where: {id: id}});
        if (data) {
            await CfrProcess.update({show: false}, {where: {id: id}})
            const value = await CfrProcess.findOne({where: {id: data.id}});
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