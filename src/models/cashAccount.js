import {DataTypes} from "sequelize";

export const createCashAccountModel = async (sequelize) => {
    const CashAccount = sequelize.define(
        "cash_account",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            unit : {
              type : DataTypes.STRING
            },
            ma_tk_viet_tat: {
                type: DataTypes.STRING,
            },
            ma_tk_full: {
                type: DataTypes.STRING,
            },
            chu_tai_khoan: {
                type: DataTypes.STRING,
            },
            group: {
                type: DataTypes.STRING,
            },
            chu_thich_tk_tien: {
                type: DataTypes.STRING,
            },show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "aaa",
            tableName:"cash_account",
            timestamps: false,
        }
    );
    return CashAccount;
};