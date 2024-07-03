import {DataTypes} from "sequelize";

export const createAccountingJournalAglProductListAglModel = async (sequelize) => {
    const AccountingJournalAglProductListAgl = sequelize.define(
        "accountingJournalAgl_productListAgl",
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
            id_accounting_journal_agl: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'accounting_journal_agl',
                    }
                },
                key: 'id'
            },
        },
        {
            schema: "aaa",
            tableName:"accountingJournalAgl_productListAgl",
            timestamps: false,
        }
    );
    return AccountingJournalAglProductListAgl;
};