import {DataTypes} from "sequelize";

export const createAccountingJournalAneContractListAneModel = async (sequelize) => {
    const AccountingJournalAneContractListAne = sequelize.define(
        "accountingJournalAne_contractListAne",
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
                        schema: 'aaa',
                        tableName: 'contract_list_ane',
                    }
                },
                key: 'id'
            },
            id_accounting_journal: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'accounting_journal_ane',
                    }
                },
                key: 'id'
            },
        },
        {
            schema: "aaa",
            tableName:"accountingJournalAne_contractListAne",
            timestamps: false,
        }
    );
    return AccountingJournalAneContractListAne;
};