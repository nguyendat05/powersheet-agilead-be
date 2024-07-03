import {DataTypes} from "sequelize";

export const createProjectListModel = async (sequelize) => {
    const ProjectList = sequelize.define(
        "project_list",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            project_name: {
                type: DataTypes.STRING,
            },
            note: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "aaa",
            tableName:"project_list",
            timestamps: false,
        }
    );
    return ProjectList;
};