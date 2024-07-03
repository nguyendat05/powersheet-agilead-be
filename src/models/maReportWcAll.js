import {DataTypes} from "sequelize";

export const createMaReportWcAllModel = async (sequelize) => {
    const MaReportPlWcAll = sequelize.define(
        "ma_report_pl_wc_all",
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
            AGL: {
                type: DataTypes.DECIMAL
            },
            OS: {
                type: DataTypes.DECIMAL

            },
            LIB: {
                type: DataTypes.DECIMAL

            },
            ANE: {
                type: DataTypes.DECIMAL

            },
            AU: {
                type: DataTypes.DECIMAL

            },
            AAA: {
                type: DataTypes.DECIMAL

            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "aaa",
            tableName: 'ma_report_pl_wc_all',
            timestamps: false,
        }
    );
    return MaReportPlWcAll;
};