import {DataTypes} from "sequelize";

export const createReportingLineModel = async (sequelize) => {
    const ReportingLine = sequelize.define(
        "reporting_line",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            unit : {
                type : DataTypes.STRING
            },
            id_nhanvien: {
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
            id_quan_ly_truc_tiep: {
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
            tableName:"reporting_line",
            timestamps: false,
        }
    );
    return ReportingLine;
};