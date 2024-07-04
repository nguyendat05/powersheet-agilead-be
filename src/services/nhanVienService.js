import {
    AccountingJournalAgl,
    AccountingJournalAne,
    NhanVien,
    ReportingLine,
    TeamList
} from "../postgres/postgres.js";

export const createNhanVien = async (value) => {
    try {
        const data = await NhanVien.create(value)
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
export const getNhanVien = async () => {
    try {
        const data = await NhanVien.findAll({
            order: [["id", "DESC"]],
            where: {
                show: true
            },
            include: [
                {model: ReportingLine, as: 'reportingLines'},
                {model: ReportingLine, as: 'reportingLineQuanLyTrucTieps'},
                {model: AccountingJournalAgl, as: "accountingJournalAgls"},
                {model: AccountingJournalAne, as: "accountingJournalAnes"},
                {model: TeamList, as: "teamList"},
            ],

        })
        return {
            msg: data ? 'Lấy nhân viên thành công' : 'Lỗi lấy nhân viên',
            data: data
        }
    } catch (error) {
        return {
            error: error,
            msg: "Lỗi máy chủ",
        }

    }
};

export const hideNhanVien = async (id) => {
    try {
        const data = await NhanVien.findOne({where: {id: id}});
        if (data) {
            await NhanVien.update({show: false}, {
                where: {id: id},
            })
            const value = await NhanVien.findOne({where: {id: data.id}});
            return {
                msg: "Đã ẩn thành công",
                data: value
            }
        } else {
            return {
                msg: "Không tìm thấy đối tượng phù hợp để ẩn",
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

export const updateNhanVien = async (id, value) => {
    try {
        const data = await NhanVien.findOne({where: {id: id}});
        if (data) {
            await NhanVien.update(value, {where: {id: id}})
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

