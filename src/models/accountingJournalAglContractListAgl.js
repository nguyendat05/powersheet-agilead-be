import {DataTypes} from "sequelize";

export const createAccountingJournalAglContractListAglModel = async (sequelize) => {
    const AccountingJournalAglContractListAgl = sequelize.define(
        "accountingJournalAgl_contractListAgl",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
            id_contract: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'agilead',
                        tableName: 'contract_list_agl',
                    }
                },
                key: 'id'
            },
            id_accounting_journal: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'agilead',
                        tableName: 'accounting_journal_agl',
                    }
                },
                key: 'id'
            },
        },
        {
            schema: "agilead",
            tableName:"accountingJournalAgl_contractListAgl",
            timestamps: false,
        }
    );
    return AccountingJournalAglContractListAgl;
};