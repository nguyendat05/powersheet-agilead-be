import { DataTypes } from "sequelize";

export const createProductListModel = async (sequelize) => {
    const ProductList = sequelize.define(
        "product_list",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            ma_sp: {
                type: DataTypes.STRING,
            },
            ten_sp: {
                type: DataTypes.STRING,
            },
            chu_thich_sp: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "aaa",
            tableName:"product_list",
            timestamps: false,
        }
    );
    return ProductList;
};