import {DataTypes} from "sequelize";

export const createTeamListModel = async (sequelize) => {
    const TeamList = sequelize.define(
        "team_list",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            don_vi: {
              type : DataTypes.STRING,
            },
            team: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "agilead",
            tableName:"team_list",
            timestamps: false,
        }
    );
    return TeamList;
};