import {DataTypes} from "sequelize";

export const createLeavePhepModel = async (sequelize) => {
    const LeavePhep = sequelize.define(
        "leave_phep",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            loai_leave : {
                type : DataTypes.STRING
            },
            note : {
                type : DataTypes.STRING
            },
            start_date: {
                type: DataTypes.DATE,
            },
            end_date: {
                type: DataTypes.DATE,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
            id_nguoi_de_nghi: {
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
            id_quan_Ly_truc_tiep: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'nhanvien',
                    }
                },
                key: 'id'
            }
        },
        {
            schema: "aaa",
            tableName: "leave_phep",
            timestamps: false,
        }
    );
    return LeavePhep;
};