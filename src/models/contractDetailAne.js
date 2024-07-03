import {DataTypes} from "sequelize";

export const createContractDetailAneModel = async (sequelize) => {
    const  ContractDetailAne = sequelize.define(
        "contract_detail_ane",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            don_gia_chua_vat: {
                type: DataTypes.INTEGER,
            },
            don_gia_da_gom_vat: {
                type: DataTypes.INTEGER,
            },
            so_luong: {
                type: DataTypes.INTEGER,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
            id_contractList:{
                type:DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'contract_list_ane',
                    }
                },
                key: 'id'
            },
            id_product:{
                type:DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'product_list',
                    }
                },
                key: 'id'
            },
        },
        {
            schema: "aaa",
            tableName:"contract_detail_ane",
            timestamps: false,
        }
    );
    return ContractDetailAne;
};