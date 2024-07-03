import {DataTypes} from "sequelize";

export const createAccountingJournalAneModel = async (sequelize) => {
    const AccountingJournalAne = sequelize.define(
        "accounting_journal_ane",
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

            show: {
                type: DataTypes.BOOLEAN,
            },
            duyet_journal: {
                type: DataTypes.STRING,
            },
            khoa_so: {
                type: DataTypes.BOOLEAN,
            },
            thu_chi: {
                type: DataTypes.STRING,
            },
            pl: {
                type: DataTypes.STRING,
            },

            id_tk_no: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'vas_account_list',
                    }
                },
                key: 'id'
            },
            chu_thich: {
                type: DataTypes.STRING,
            },
            id_tk_co: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'vas_account_list',
                    }
                },
                key: 'id'
            },
            id_khach_hang: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'client_manager',
                    }
                },
                key: 'id'
            },
            id_nhanvien: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'nhanvien',
                    }
                },
                key: 'id'
            },
            id_supplier: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'supplier_list',
                    }
                },
                key: 'id'
            },
            id_cashaccount: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'cash_account',
                    }
                },
                key: 'id'
            },
            id_industry: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'industry_list',
                    }
                },
                key: 'id'
            },

            id_kmf_kmns_list: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
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
                        schema: 'aaa',
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
                        schema: 'aaa',
                        tableName: 'team_list',
                    }
                },
                key: 'id'
            },
            id_project: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        schema: 'aaa',
                        tableName: 'project_list',
                    }
                },
                key: 'id'
            },
        },
        {
            schema: "aaa",
            tableName: "accounting_journal_ane",
            timestamps: false,
        }
    );
    return AccountingJournalAne;
};