import {DataTypes} from "sequelize";

export const createPaymentRequestsModel = async (sequelize) => {
    const PaymentRequests = sequelize.define(
        "payment_request",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            loai_de_nghi: {
                type: DataTypes.STRING,
            },
            ma_de_nghi: {
                type: DataTypes.STRING,
            },
            ngay: {
                type: DataTypes.STRING,
            },
            so_tien: {
                type: DataTypes.STRING,
            },
            dien_giai: {
                type: DataTypes.STRING,
            },
            khoan_muc: {
                type: DataTypes.STRING,
            },
            dinh_kem: {
                type: DataTypes.STRING,
            },
            team: {
                type: DataTypes.STRING
            },
            id_nhanvien_de_nghi: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'nhanvien',
                    }
                },
                key: 'id'
            },
            id_nhanvien_ke_toan: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'nhanvien',
                    }
                },
                key: 'id'
            },
            id_nhanvien_manager: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'nhanvien',
                    }
                },
                key: 'id'
            },
            id_nhanvien_giam_doc: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'nhanvien',
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
            tableName: "payment_request",
            timestamps: false,
        }
    );
    return PaymentRequests;
};