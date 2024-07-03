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
            mst_khach_hang: {
                type: DataTypes.INTEGER,
            },
            dia_chi_xuat_hoa_don: {
                type: DataTypes.STRING,
            },
            noi_dung_hoa_don: {
                type: DataTypes.STRING,
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
            id_khach_hang: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'client_manager',
                    }
                },
                key: 'id'
            },
        },
        {
            schema: "aaa",
            tableName:"invoice_list_agl",
            timestamps: false,
        }
    );
    return InvoiceListAgl;
};