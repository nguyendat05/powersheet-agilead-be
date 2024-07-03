import {DataTypes} from "sequelize";

export const createMaReportProfitLossHLModel = async (sequelize) => {
    const MaReportProfitLossHL = sequelize.define(
        "ma_report_profit_loss_HL",
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
            t1_thuchien: {
                type: DataTypes.DECIMAL
            },
            t1_kehoach: {
                type: DataTypes.DECIMAL
            },
            t1_chenhlech: {
                type: DataTypes.DECIMAL
            },
            t2_thuchien: {
                type: DataTypes.DECIMAL
            },
            t2_kehoach: {
                type: DataTypes.DECIMAL
            },
            t2_chenhlech: {
                type: DataTypes.DECIMAL
            },
            t3_thuchien: {
                type: DataTypes.DECIMAL
            },
            t3_kehoach: {
                type: DataTypes.DECIMAL
            },
            t3_chenhlech: {
                type: DataTypes.DECIMAL
            },
            t4_thuchien: {
                type: DataTypes.DECIMAL
            },
            t4_kehoach: {
                type: DataTypes.DECIMAL
            },
            t4_chenhlech: {
                type: DataTypes.DECIMAL
            },
            t5_thuchien: {
                type: DataTypes.DECIMAL
            },
            t5_kehoach: {
                type: DataTypes.DECIMAL
            },
            t5_chenhlech: {
                type: DataTypes.DECIMAL
            },
            t6_thuchien: {
                type: DataTypes.DECIMAL
            },
            t6_kehoach: {
                type: DataTypes.DECIMAL
            },
            t6_chenhlech: {
                type: DataTypes.DECIMAL
            },
            t7_thuchien: {
                type: DataTypes.DECIMAL
            },
            t7_kehoach: {
                type: DataTypes.DECIMAL
            },
            t7_chenhlech: {
                type: DataTypes.DECIMAL
            },
            t8_thuchien: {
                type: DataTypes.DECIMAL
            },
            t8_kehoach: {
                type: DataTypes.DECIMAL
            },
            t8_chenhlech: {
                type: DataTypes.DECIMAL
            },
            t9_thuchien: {
                type: DataTypes.DECIMAL
            },
            t9_kehoach: {
                type: DataTypes.DECIMAL
            },
            t9_chenhlech: {
                type: DataTypes.DECIMAL
            },
            t10_thuchien: {
                type: DataTypes.DECIMAL
            },
            t10_kehoach: {
                type: DataTypes.DECIMAL
            },
            t10_chenhlech: {
                type: DataTypes.DECIMAL
            },
            t11_thuchien: {
                type: DataTypes.DECIMAL
            },
            t11_kehoach: {
                type: DataTypes.DECIMAL
            },
            t11_chenhlech: {
                type: DataTypes.DECIMAL
            },
            t12_thuchien: {
                type: DataTypes.DECIMAL
            },
            t12_kehoach: {
                type: DataTypes.DECIMAL
            },
            t12_chenhlech: {
                type: DataTypes.DECIMAL
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "aaa",
            tableName:"ma_report_profit_loss_HL",
            timestamps: false,
        }
    );
    return MaReportProfitLossHL ;
};