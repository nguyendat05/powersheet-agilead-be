import { DataTypes } from "sequelize";

export const createIndustryListModel = async (sequelize) => {
    const IndustryList = sequelize.define(
        "industry_list",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            nganh: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "aaa",
            tableName:"industry_list",
            timestamps: false,
        }
    );
    return IndustryList;
};