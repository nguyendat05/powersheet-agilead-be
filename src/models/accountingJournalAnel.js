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
            nha_cung_cap: {
                type: DataTypes.STRING
            },
            thu_chi: {
                type: DataTypes.STRING,
            },
            pl: {
                type: DataTypes.STRING,
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

            nganh: {
                type : DataTypes.STRING
            },

            san_pham : {
                type : DataTypes.STRING

            },
            chu_thich: {
                type: DataTypes.STRING,
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
            don_vi : {
                type : DataTypes.STRING
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
            du_an : {
                type: DataTypes.STRING
            },

            duyet_journal: {
                type: DataTypes.STRING,
            },
            khoa_so: {
                type: DataTypes.BOOLEAN,
            },
            show: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            schema: "agilead",
            tableName: "accounting_journal_ane",
            timestamps: false,
        }
    );
    return AccountingJournalAne;
};