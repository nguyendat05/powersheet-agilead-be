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
            unit : {
              type : DataTypes.STRING,
            },
            team: {
                type: DataTypes.STRING,
            },
            id_division: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'division_list',
                    }
                },
                key: 'id'
            } ,
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "aaa",
            tableName:"team_list",
            timestamps: false,
        }
    );
    return TeamList;
};