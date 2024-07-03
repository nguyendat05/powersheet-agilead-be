import {DataTypes} from "sequelize";

export const createSupplierListModel = async (sequelize) => {
    const SupplierList = sequelize.define(
        "supplier_list",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            ten_nha_cung_cap :{
                type: DataTypes.STRING,
            },
            mst_ncc: {
                type: DataTypes.INTEGER,
            },
            dia_chi_ncc: {
                type: DataTypes.STRING,
            },
            first_contract_date: {
                type: DataTypes.DATE,
            },
            note: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "aaa",
            tableName: "supplier_list",
            timestamps: false,
        }
    );
    return SupplierList;
};