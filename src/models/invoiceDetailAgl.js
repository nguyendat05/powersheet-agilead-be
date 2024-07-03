import {DataTypes} from "sequelize";

export const createInvoiceDetailAglModel = async (sequelize) => {
    const  InvoiceDetailAgl = sequelize.define(
        "invoice_detail_agl",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            tien_chua_vat: {
                type: DataTypes.INTEGER,
            },
            tien_gom_vat: {
                type: DataTypes.INTEGER,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
            id_invoice:{
                type:DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'invoice_list_agl',
                    }
                },
                key: 'id'
            },
            id_product:{
                type:DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'product_list',
                    }
                },
                key: 'id'
            },
        },
        {
            schema: "aaa",
            tableName: "invoice_detail_agl",
            timestamps: false,
        }
    );
    return InvoiceDetailAgl;
};