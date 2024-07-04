import { DataTypes } from "sequelize";

export const createVasAccountListModel = async (sequelize) => {
    const VasAccountList = sequelize.define(
        "vas_account_list",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            don_vi : {
              type : DataTypes.STRING
            },
            ma_tai_khoan: {
                type: DataTypes.STRING,
            },
            tk_cap: {
                type: DataTypes.STRING,
            },
            ten_tai_khoan: {
                type: DataTypes.STRING,
            },
            ma_chi_tieu: {
                type: DataTypes.STRING,
            },
            phan_loai: {
                type: DataTypes.STRING,
            },
            chu_thich_tk: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "agilead",
            tableName: "vas_account_list",
            timestamps: false,
        }
    );
    return VasAccountList;
};