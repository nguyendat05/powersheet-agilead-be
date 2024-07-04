import {DataTypes} from "sequelize";

export const createDivisionListModel = async (sequelize) => {
    const DivisionList = sequelize.define(
        "division_list",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            don_vi: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "agilead",
            tableName:"division_list",
            timestamps: false,
        }
    );
    return DivisionList;
};