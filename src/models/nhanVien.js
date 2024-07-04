import {DataTypes} from "sequelize";

export const createNhanVienModel = async (sequelize) => {
    const NhanVien = sequelize.define(
        "nhanvien",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            don_vi: {
                type: DataTypes.STRING
            },
            code_nv : {
                type : DataTypes.STRING
            },
            email_nv: {
                type: DataTypes.STRING,
            },
            ten_viet_tat: {
                type: DataTypes.STRING,
            },
            ten_day_du: {
                type: DataTypes.STRING,
            },
            biet_danh: {
                type: DataTypes.STRING,
            },
            loai_hinh: {
                type: DataTypes.STRING,
            },
            ngay_ki_hd: {
                type: DataTypes.DATE,
            },
            so_dien_thoai: {
                type: DataTypes.STRING,
            },
            sdt_khan_cap: {
                type: DataTypes.STRING,
            },
            nguoi_lien_he_khan_cap: {
                type: DataTypes.STRING,
            },
            truong: {
                type: DataTypes.STRING,
            },
            id_team: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'agilead',
                        tableName: 'team_list',
                    }
                },
                key: 'id'
            },
            chuc_vu: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "agilead",
            tableName: 'nhanvien',
            timestamps: false,
        }
    );
    return NhanVien;
};