import { DataTypes } from "sequelize";

export const createKmfKmnsListModel = async (sequelize) => {
    const KmfKmnsList = sequelize.define(
        "kmf_kmns_list",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            don_vi : {
                type : DataTypes.STRING
            },
            khoan_muc_thu_chi: {
                type: DataTypes.STRING,
            },
            khoan_muc_pl: {
                type: DataTypes.STRING,
            },
            mo_ta_km_thu_chi: {
                type: DataTypes.STRING,
            },
            mo_ta_km_pl: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "agilead",
            tableName:"kmf_kmns_list",
            timestamps: false,
        }
    );
    return KmfKmnsList;
};