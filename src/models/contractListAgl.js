import { DataTypes } from "sequelize";

export const createContractListAglModel = async (sequelize) => {
    const ContractListAgl = sequelize.define(
        "contract_list_agl",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            mua_ban: {
                type: DataTypes.STRING,
            },
            so_hop_dong: {
                type: DataTypes.STRING,
            },
            ngay_ky: {
                type: DataTypes.DATE,
            },
            bat_dau_du_kien: {
                type: DataTypes.DATE,
            },
            ket_thuc_du_kien: {
                type: DataTypes.DATE,
            },

            gia_tri_gom_vat: {
                type: DataTypes.INTEGER,
            },
            gia_tri_khong_vat: {
                type: DataTypes.INTEGER,
            },
            dinh_kem: {
                type: DataTypes.STRING,
            },
            show : {
                type: DataTypes.BOOLEAN,
            },
            id_khach_hang: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'client_manager',
                    }
                },
                key: 'id'
            },
        },
        {
            schema: "aaa",
            tableName:"contract_list_agl",
            timestamps: false,
        }
    );
    return ContractListAgl;
};