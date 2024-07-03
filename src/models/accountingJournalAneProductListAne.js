import {DataTypes} from "sequelize";

export const createAccountingJournalAneProductListAneModel = async (sequelize) => {
    const AccountingJournalAneProductListAne = sequelize.define(
        "accountingJournalAne_productListAne",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
            id_product: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'product_list',
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
            tableName:"accountingJournalAne_productListAne",
            timestamps: false,
        }
    );
    return AccountingJournalAneProductListAne;
};