import { DataTypes } from "sequelize";

export const createInvoiceListAglModel = async (sequelize) => {
    const InvoiceListAgl = sequelize.define(
        "invoice_list_agl",
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
            so_hoa_don: {
                type: DataTypes.STRING,
            },
            ngay_hoa_don: {
                type: DataTypes.DATE,
            },
            ten_khack_hang : {
              type : DataTypes.STRING
            },
            mst_khach_hang: {
                type: DataTypes.INTEGER,
            },
            dia_chi_xuat_hoa_don: {
                type: DataTypes.STRING,
            },
            noi_dung_hoa_don: {
                type: DataTypes.STRING,
            },
            tien_chua_vat : {
              type : DataTypes.DECIMAL
            },
            tien_gom_vat : {
              type : DataTypes.DECIMAL
            },
            dinh_kem: {
                type: DataTypes.STRING,
            },
            chu_thich: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "agilead",
            tableName:"invoice_list_agl",
            timestamps: false,
        }
    );
    return InvoiceListAgl;
};