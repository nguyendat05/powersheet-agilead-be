import {DataTypes} from "sequelize";

export const createMaReportProfitLossHvaV3Model = async (sequelize) => {
    const MaReportProfitLossHvaV3 = sequelize.define(
        "ma_report_profit_loss_v3",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            refercode: {
                type: DataTypes.STRING,
            },
            khach_hang: {
                type: DataTypes.STRING,
            },
            hop_dong: {
                type: DataTypes.STRING,
            },
            don_vi_trien_khai : {
                type : DataTypes.STRING
            },
            doanh_thu : {
                type:DataTypes.INTEGER
            },
            chi_phi_truc_tiep : {
                type:DataTypes.INTEGER
            },
            chi_phi_phan_bo : {
                type:DataTypes.INTEGER
            },
            lai_lo_truc_tiep : {
                type:DataTypes.INTEGER
            },
            lai_lo_sau_phan_bo : {
                type:DataTypes.INTEGER
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "aaa",
            tableName:"ma_report_profit_loss_v3",
            timestamps: false,
        }
    );
    return MaReportProfitLossHvaV3 ;
};