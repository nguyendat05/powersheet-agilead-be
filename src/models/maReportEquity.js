import {DataTypes} from "sequelize";

export const createMaReportEquityModel = async (sequelize) => {
    const MaReportEquity = sequelize.define(
        "ma_report_equity",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            ra : {
                type:DataTypes.BOOLEAN
            },
            unit : {
              type : DataTypes.STRING
            },
            co_dong: {
                type: DataTypes.STRING,
            },
            note: {
                type: DataTypes.STRING,
            },
            loai_hinh :{
                type:DataTypes.STRING,
            },
            slcp: {
                type: DataTypes.DECIMAL,
            },
            von_dieu_le: {
                type: DataTypes.DECIMAL,

            },
            thang_du :{
                type : DataTypes.DECIMAL,
            } ,
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "agilead",
            tableName:'ma_report_equity',
            timestamps: false,
        }
    );
    return MaReportEquity ;
};