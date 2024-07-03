import {DataTypes} from "sequelize";

export const createCfrContentModel = async (sequelize) => {
    const CfrContent = sequelize.define(
        "cfr_content",
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
            muc :{
                type:DataTypes.STRING,
            },
            noi_dung: {
                type: DataTypes.STRING,
            },
            note_cua_quan_ly: {
                type: DataTypes.STRING,
            },
            status :{
                type : DataTypes.STRING,
            } ,
            show :{
                type : DataTypes.BOOLEAN,
            }
        },
        {
            schema: "aaa",
            timestamps: false,
        }
    );
    return CfrContent;
};