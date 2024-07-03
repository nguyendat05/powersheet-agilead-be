import {DataTypes} from "sequelize";

export const createAccountingJournalAneInvoiceListAneModel = async (sequelize) => {
    const AccountingJournalAglInvoiceListAne = sequelize.define(
        "accountingJournalAne_invoiceListAne",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
            id_invoice: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'invoice_list_ane',
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
            tableName:"accountingJournalAne_invoiceListAne",
            timestamps: false,
        }
    );
    return AccountingJournalAglInvoiceListAne;
};