import { DataTypes } from "sequelize";

export const createContractListAneModel = async (sequelize) => {
    const ContractListAne = sequelize.define(
        "contract_list_ane",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            don_vi : {
                type : DataTypes.STRING
            },
            mua_ban: {
                type: DataTypes.STRING,
            },
            so_hop_dong: {
                type: DataTypes.STRING,
            },
            ngay_ky: {
                type: DataTypes.DATE,
            },
            bat_dau_du_kien: {
                type: DataTypes.DATE,
            },
            ket_thuc_du_kien: {
                type: DataTypes.DATE,
            },
            khach_hang: {
                type: DataTypes.INTEGER,
            },
            san_pham : {
                type : DataTypes.STRING
            },
            so_luong : {
                type : DataTypes.DECIMAL
            },
            don_gia_gom_vat : {
                type : DataTypes.DECIMAL
            },
            don_gia_khong_vat : {
                type : DataTypes.DECIMAL
            },
            gia_tri_gom_vat: {
                type: DataTypes.DECIMAL,
            },
            gia_tri_khong_vat: {
                type: DataTypes.DECIMAL,
            },
            dinh_kem: {
                type: DataTypes.STRING,
            },
            show : {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "agilead",
            tableName:"contract_list_ane",
            timestamps: false,
        }
    );
    return ContractListAne;
};