import {DataTypes} from "sequelize";

export const createMaReportWcAllModel = async (sequelize) => {
    const MaReportWcAll = sequelize.define(
        "ma_report_wc_all",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            ra : {
              type : DataTypes.BOOLEAN
            },
            header: {
                type: DataTypes.STRING,
            },
            note: {
                type: DataTypes.STRING,
            },
            AGL: {
                type: DataTypes.STRING
            },
            OS: {
                type: DataTypes.STRING

            },
            LIB: {
                type: DataTypes.STRING

            },
            ANE: {
                type: DataTypes.STRING

            },
            AU: {
                type: DataTypes.STRING

            },
            AAA: {
                type: DataTypes.STRING

            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "agilead",
            tableName: 'ma_report_wc_all',
            timestamps: false,
        }
    );
    return MaReportWcAll;
};