import {DataTypes} from "sequelize";

export const createAccountingJournalAglInvoiceListAglModel = async (sequelize) => {
    const AccountingJournalAglInvoiceListAgl = sequelize.define(
        "accountingJournalAgl_invoiceListAgl",
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
                        schema: 'agilead',
                        tableName: 'invoice_list_agl',
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
            tableName:"accountingJournalAgl_invoiceListAgl",
            timestamps: false,
        }
    );
    return AccountingJournalAglInvoiceListAgl;
};