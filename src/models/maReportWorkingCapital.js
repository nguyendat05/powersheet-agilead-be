import {DataTypes} from "sequelize";

export const createMaReportWorkingCapitalModel = async (sequelize) => {
    const MaReportWorkingCapital = sequelize.define(
        "ma_report_working_capital",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            header: {
                type: DataTypes.STRING,
            },
            note: {
                type: DataTypes.STRING,
            },
            hien_co :{
                type:DataTypes.STRING,
            },
            action :{
                type : DataTypes.STRING,
            } ,
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "aaa",
            tableName:"ma_report_working_capital",
            timestamps: false,
        }
    );
    return MaReportWorkingCapital ;
};