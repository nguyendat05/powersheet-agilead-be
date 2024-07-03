import {DataTypes} from "sequelize";

export const createMaReportPlAneModel = async (sequelize) => {
    const MaReportPlAne = sequelize.define(
        "ma_report_pl_ane",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            refercode: {
                type: DataTypes.STRING,
            },
            header: {
                type: DataTypes.STRING,
            },
            note: {
                type: DataTypes.STRING,
            },
            t1: {
                type: DataTypes.DECIMAL
            },
            t2 : {
                type: DataTypes.DECIMAL
            },
            t3: {
                type: DataTypes.DECIMAL
            },
            t4: {
                type: DataTypes.DECIMAL
            },
            t5: {
                type: DataTypes.DECIMAL
            },
            t6_: {
                type: DataTypes.DECIMAL
            },
            t7: {
                type: DataTypes.DECIMAL
            },
            t8: {
                type: DataTypes.DECIMAL
            },
            t9: {
                type: DataTypes.DECIMAL
            },
            t10: {
                type: DataTypes.DECIMAL
            },
            t11: {
                type: DataTypes.DECIMAL
            },
            t12: {
                type: DataTypes.DECIMAL
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "aaa",
            tableName:'ma_report_pl_ane',
            timestamps: false,
        }
    );
    return MaReportPlAne ;
};