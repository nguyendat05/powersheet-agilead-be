import {DataTypes} from "sequelize";

export const createContractDetailAglModel = async (sequelize) => {
    const  ContractDetailAgl = sequelize.define(
        "contract_detail_agl",
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
                        tableName: 'contract_list_agl',
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
            tableName:"contract_detail_agl",
            timestamps: false,
        }
    );
    return ContractDetailAgl;
};