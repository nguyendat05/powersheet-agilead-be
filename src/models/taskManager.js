import { DataTypes } from "sequelize";

export const createTaskManagerModel = async (sequelize) => {
    const TaskManager = sequelize.define(
        "taskmanager",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            layer: {
                type: DataTypes.JSON,
            },
            viec: {
                type: DataTypes.STRING,
            },
            pic : {
              type: DataTypes.STRING
            },

            batdau_dukien: {
                type: DataTypes.DATE,
            },
            hoanthanh_dukien: {
                type: DataTypes.DATE,
            },
            note: {
                type: DataTypes.STRING,
            },
            tinh_trang: {
                type: DataTypes.STRING,
            },
            duyet_hoan_thanh: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
            id_team: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'team_list',
                    }
                },
                key: 'id'
            },
        },
        {
            schema: "aaa",
            tableName:"taskmanager",
            timestamps: false,
        }
    );
    return TaskManager;
};