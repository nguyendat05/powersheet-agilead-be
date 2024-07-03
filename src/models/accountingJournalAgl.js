import {DataTypes} from "sequelize";

export const createAccountingJournalAglModel = async (sequelize) => {
    const AccountingJournalAgl = sequelize.define(
        "accounting_journal_agl",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            date: {
                type: DataTypes.DATE,
            },
            dien_giai: {
                type: DataTypes.STRING,
            },
            so_tien: {
                type: DataTypes.INTEGER,
            },
            id_tk_no: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'agilead',
                        tableName: 'vas_account_list',
                    }
                },
                key: 'id'
            },

            id_tk_co: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'agilead',
                        tableName: 'vas_account_list',
                    }
                },
                key: 'id'
            },

            khach_hang: {
                type: DataTypes.STRING
            },



            duyet_journal: {
                type: DataTypes.STRING,
            },

            thu_chi: {
                type: DataTypes.STRING,
            },
            pl: {
                type: DataTypes.STRING,
            },
            chu_thich: {
                type: DataTypes.STRING,
            },

            khoa_so: {
                type: DataTypes.BOOLEAN,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },

            id_nhanvien: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'agilead',
                        tableName: 'nhanvien',
                    }
                },
                key: 'id'
            },
            id_cashaccount: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'agilead',
                        tableName: 'cash_account',
                    }
                },
                key: 'id'
            },
            id_kmf_kmns_list: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'agilead',
                        tableName: 'kmf_kmns_list',
                    }
                },
                key: 'id'
            },

            id_division: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'agilead',
                        tableName: 'division_list',
                    }
                },
                key: 'id'
            },

            id_team: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'agilead',
                        tableName: 'team_list',
                    }
                },
                key: 'id'
            },
        },
        {
            schema: "agilead",
            tableName: "accounting_journal_agl",
            timestamps: false,
        }
    );
    return AccountingJournalAgl;
};