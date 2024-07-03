import {DataTypes} from "sequelize";

export const createCfrProcessModel = async (sequelize) => {
    const CfrProcess = sequelize.define(
        "cfr_process",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            layer: {
                type: DataTypes.STRING,
            },
            ma_de_nghi: {
                type: DataTypes.STRING,
            },
            ki_checkin: {
                type: DataTypes.STRING,
            },
            noi_dung : {
                type : DataTypes.STRING,
            },
            id_nhanvien_de_nghi :{
                type:DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'nhanvien',
                    }
                },
                key: 'id'
            },
            id_nhanvien_duyet :{
                type : DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'nhanvien',
                    }
                },
                key: 'id'
            } ,
            show :{
                type : DataTypes.BOOLEAN,
                allowNull : false
            }
        },
        {
            schema: "aaa",
            timestamps: false,
        }
    );
    return CfrProcess;
};