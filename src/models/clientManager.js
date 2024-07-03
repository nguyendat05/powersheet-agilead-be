import {DataTypes} from "sequelize";

export const createClientManagerModel = async (sequelize) => {
    const ClientManager = sequelize.define(
        "client_manager",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_khach_hang :{
                type : DataTypes.STRING
            },
            ten_khach_hang: {
                type: DataTypes.STRING,
            },
            nhom_khach: {
                type: DataTypes.STRING,
            },
            contact_dau_moi : {
                type : DataTypes.STRING,
            } ,
            sdt_contact_dau_moi : {
                type: DataTypes.STRING,
            },
            dia_chi : {
                type: DataTypes.STRING,
            },
            PIC: {
                type: DataTypes.STRING,
            },
            id_industry: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'industry_list',
                    }
                },
                key: 'id'
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "aaa",
            tableName: "client_manager",
            timestamps: false,
        }
    );
    return ClientManager;
};