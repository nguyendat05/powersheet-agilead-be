import {config} from "dotenv";

config();
import {Sequelize} from "sequelize";

// Model
import {createUserModel} from "../models/user.js";
import {createRoleModel} from "../models/role.js";

import {createContractListAglModel} from "../models/contractListAgl.js";
import {createInvoiceListAglModel} from "../models/invoiceListAgl.js";
import {createDivisionListModel} from "../models/divisionList.js";
import {createTeamListModel} from "../models/teamList.js";
import {createNhanVienModel} from "../models/nhanVien.js";
import {createVasAccountListModel} from "../models/vasAccountList.js";
import {createKmfKmnsListModel} from "../models/kmfKmnsList.js";
import {createCashAccountModel} from "../models/cashAccount.js";
import {createReportingLineModel} from "../models/reportingLine.js";
import {createAccountingJournalAglModel} from "../models/accountingJournalAgl.js";
import {createAccountingJournalAglInvoiceListAglModel} from "../models/accountingJournalAglInvoiceListAgl.js";
import {createAccountingJournalAglContractListAglModel} from "../models/accountingJournalAglContractListAgl.js";
import {createMaReportEquityModel} from "../models/maReportEquity.js";
import {createContractListAneModel} from "../models/contractListAne.js";
import {createInvoiceListAneModel} from "../models/invoiceListAne.js";
import {createAccountingJournalAneModel} from "../models/accountingJournalAnel.js";
import {createAccountingJournalAneInvoiceListAneModel} from "../models/accountingJournalAneInvoiceListAne.js";
import {createAccountingJournalAneContractListAneModel} from "../models/accountingJournalAneContractListAne.js";
import {createMaReportPlAaaModel} from "../models/maReportPlAaa.js";
import {createMaReportPlOsModel} from "../models/maReportPlOs.js";
import {createMaReportPlAneModel} from "../models/maReportPlAne.js";
import {createMaReportPlLibModel} from "../models/maReportPlLib.js";
import {createMaReportPlAglModel} from "../models/maReportPlAgl.js";
import {createMaReportWcAllModel} from "../models/maReportWcAll.js";
import {createMaReportCashPlanningAglModel} from "../models/maReportCashPlanningAgl.js";
import {createMaReportCashPlanningAneModel} from "../models/maReportCashPlanningAne.js";
import {createMaReportCashPlanningAuModel} from "../models/maReportCashPlanningAu.js";
import {createMaReportCashPlanningLibModel} from "../models/maReportCashPlanningLib.js";
import {createMaReportCashPlanningOsModel} from "../models/maReportCashPlanningOs.js";

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: "postgres",
        port: 5432,
        logging: false,
        pool: {
            max: 100,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        define: {
            timestamps: false,
        },
        dialectOptions: {
            connectTimeout: 60000,
        },
    }
);

let User = null;
let Role = null;
let DivisionList = null;
let TeamList = null;

let NhanVien = null;
let VasAccountList = null;
let KmfKmnsList = null;
let CashAccount = null;
let ReportingLine = null;

// Của Ma
let MaReportEquity = null;
let MaReportPlAaa = null;
let MaReportPlOs = null;
let MaReportPlAne = null;
let MaReportPlLib = null;
let MaReportPlAgl = null;
let MaReportWcAll = null;
let MaReportCashPlanningAgl = null;
let MaReportCashPlanningAne = null;
let MaReportCashPlanningAu = null;
let MaReportCashPlanningLib = null;
let MaReportCashPlanningOs = null;



// Agl
let ContractListAgl = null;
let InvoiceListAgl = null;
let AccountingJournalAgl = null;
let AccountingJournalAglInvoiceListAgl = null;
let AccountingJournalAglContractListAgl = null;

// Ane
let ContractListAne = null;
let InvoiceListAne = null;
let AccountingJournalAne = null;
let AccountingJournalAneInvoiceListAne = null;
let AccountingJournalAneContractListAne = null;

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection DB successfully");

        User = await createUserModel(sequelize);
        Role = await createRoleModel(sequelize);
        VasAccountList = await createVasAccountListModel(sequelize);
        DivisionList = await createDivisionListModel(sequelize);
        NhanVien = await createNhanVienModel(sequelize);
        KmfKmnsList = await createKmfKmnsListModel(sequelize);
        CashAccount = await createCashAccountModel(sequelize);
        ReportingLine = await createReportingLineModel(sequelize);
        TeamList = await createTeamListModel(sequelize);

        // Các Ma_Report
        MaReportEquity = await createMaReportEquityModel(sequelize);
        MaReportPlAaa = await createMaReportPlAaaModel(sequelize);
        MaReportPlOs = await createMaReportPlOsModel(sequelize);
        MaReportPlAne = await createMaReportPlAneModel(sequelize);
        MaReportPlLib = await createMaReportPlLibModel(sequelize);
        MaReportPlAgl = await createMaReportPlAglModel(sequelize);
        MaReportWcAll = await createMaReportWcAllModel(sequelize);
        MaReportCashPlanningAgl = await createMaReportCashPlanningAglModel(sequelize);
        MaReportCashPlanningAne = await createMaReportCashPlanningAneModel(sequelize);
        MaReportCashPlanningAu = await createMaReportCashPlanningAuModel(sequelize);
        MaReportCashPlanningLib = await createMaReportCashPlanningLibModel(sequelize);
        MaReportCashPlanningOs = await createMaReportCashPlanningOsModel(sequelize);

        // Agl
        ContractListAgl = await createContractListAglModel(sequelize);
        InvoiceListAgl = await createInvoiceListAglModel(sequelize);
        AccountingJournalAgl = await createAccountingJournalAglModel(sequelize);
        AccountingJournalAglInvoiceListAgl = await createAccountingJournalAglInvoiceListAglModel(sequelize);
        AccountingJournalAglContractListAgl = await createAccountingJournalAglContractListAglModel(sequelize);

        // Ane
        ContractListAne = await createContractListAneModel(sequelize);
        InvoiceListAne = await createInvoiceListAneModel(sequelize);
        AccountingJournalAne = await createAccountingJournalAneModel(sequelize);
        AccountingJournalAneInvoiceListAne = await createAccountingJournalAneInvoiceListAneModel(sequelize);
        AccountingJournalAneContractListAne = await createAccountingJournalAneContractListAneModel(sequelize);


 //// Quan hệ AccountingJournalAgl với các đối tượng khác

        // Quan hệ giữa 2 bảng AccountingJournalAgl và ContractListAgl
        ContractListAgl.hasMany(AccountingJournalAglContractListAgl, {foreignKey: 'id_contract_agl', as: "accountingJournalAglContractListAgls",});
        AccountingJournalAglContractListAgl.belongsTo(ContractListAgl, {foreignKey: 'id_contract_agl', as: "contractListAgl",})

        AccountingJournalAgl.hasMany(AccountingJournalAglContractListAgl, {foreignKey: 'id_accounting_journal_agl', as: "accountingJournalAglContractListAgls",})
        AccountingJournalAglContractListAgl.belongsTo(AccountingJournalAgl, {foreignKey: 'id_accounting_journal_agl', as: "accountingJournalAgl",})


        // Quan hệ giữa 2 bảng AccountingJournalAgl và InvoiceListAgl
        InvoiceListAgl.hasMany(AccountingJournalAglInvoiceListAgl, {foreignKey: 'id_invoice_agl', as: "accountingJournalAglInvoiceListAgls",});
        AccountingJournalAglInvoiceListAgl.belongsTo(InvoiceListAgl, {foreignKey: 'id_invoice_agl', as: "invoiceListAgl",});

        AccountingJournalAgl.hasMany(AccountingJournalAglInvoiceListAgl, {foreignKey: 'id_accounting_journal_agl', as: "accountingJournalAglInvoiceListAgls",})
        AccountingJournalAglInvoiceListAgl.belongsTo(AccountingJournalAgl, {foreignKey: 'id_accounting_journal_agl', as: "accountingJournalAgl",})


        // Quan hệ giữa AccountingJournalAgl và NhanVien
        NhanVien.hasMany(AccountingJournalAgl, {foreignKey: 'id_nhanvien', as: 'accountingJournalAgls'})
        AccountingJournalAgl.belongsTo(NhanVien, {foreignKey: "id_nhanvien", as: 'nhanVien',})


        // Quan hệ giữa AccountingJournalAgl và KmfKmnsList
        KmfKmnsList.hasMany(AccountingJournalAgl, {foreignKey: 'id_kmf_kmns_list', as: 'accountingJournalAgls',})
        AccountingJournalAgl.belongsTo(KmfKmnsList, {foreignKey: 'id_kmf_kmns_list', as: 'kmfKmmsList',})


        // Quan hệ giữa AccountingJournal và DivisionList
        DivisionList.hasMany(AccountingJournalAgl, {foreignKey: 'id_division', as: 'accountingJournalAgls',})
        AccountingJournalAgl.belongsTo(DivisionList, {foreignKey: 'id_division', as: 'divisionList',})

        // Quan hệ giữa AccountingJournal và TeamList
        TeamList.hasMany(AccountingJournalAgl, {foreignKey: 'id_team', as: 'accountingJournalAgls',})
        AccountingJournalAgl.belongsTo(TeamList, {foreignKey: 'id_team', as: 'teamList',})

        // Quan hệ giữa AccountingJournalAgl và CashAccount
        CashAccount.hasMany(AccountingJournalAgl, {foreignKey: 'id_cashaccount', as: 'accountingJournalAgls',})
        AccountingJournalAgl.belongsTo(CashAccount, {foreignKey: 'id_cashaccount', as: 'cashAccount',})


        // Quan hệ giữa AccountJournalAgl và VasAccountList
        VasAccountList.hasMany(AccountingJournalAgl, {foreignKey: 'id_tk_no', as: 'accountJournalAglNos',});
        AccountingJournalAgl.belongsTo(VasAccountList, {foreignKey: 'id_tk_no', as: 'vasAccountListNo',});

        VasAccountList.hasMany(AccountingJournalAgl, {foreignKey: 'id_tk_co', as: 'accountJournalAglCos',});
        AccountingJournalAgl.belongsTo(VasAccountList, {foreignKey: 'id_tk_co', as: 'vasAccountListCo',});


 //// Quan hệ AccountingJournalAne với các đối tượng khác

        // Quan hệ giữa 2 bảng AccountingJournalAne và ContractListAne
        ContractListAne.hasMany(AccountingJournalAneContractListAne, {foreignKey: 'id_contract_ane', as: "accountingJournalAneContractListAnes",});
        AccountingJournalAneContractListAne.belongsTo(ContractListAne, {foreignKey: 'id_contract_ane', as: "contractListAne",})

        AccountingJournalAne.hasMany(AccountingJournalAneContractListAne, {foreignKey: 'id_accounting_journal_ane', as: "accountingJournalAneContractListAnes",})
        AccountingJournalAneContractListAne.belongsTo(AccountingJournalAne, {foreignKey: 'id_accounting_journal_ane', as: "accountingJournalAne",})


        // Quan hệ giữa 2 bảng AccountingJournalAne và InvoiceListAne
        InvoiceListAne.hasMany(AccountingJournalAneInvoiceListAne, {foreignKey: 'id_invoice_ane', as: "accountingJournalAneInvoiceListAnes",});
        AccountingJournalAneInvoiceListAne.belongsTo(InvoiceListAne, {foreignKey: 'id_invoice_ane', as: "invoiceListAne",});

        AccountingJournalAne.hasMany(AccountingJournalAneInvoiceListAne, {foreignKey: 'id_accounting_journal_ane', as: "accountingJournalAneInvoiceListAnes",})
        AccountingJournalAneInvoiceListAne.belongsTo(AccountingJournalAne, {foreignKey: 'id_accounting_journal_ane', as: "accountingJournalAne",})


        // Quan hệ giữa AccountingJournalAne và NhanViennn
        NhanVien.hasMany(AccountingJournalAne, {foreignKey: 'id_nhanvien', as: 'accountingJournalAnes'})
        AccountingJournalAne.belongsTo(NhanVien, {foreignKey: "id_nhanvien", as: 'nhanVien',})


        // Quan hệ giữa AccountingJournalAne và KmfKmnsList
        KmfKmnsList.hasMany(AccountingJournalAne, {foreignKey: 'id_kmf_kmns_list', as: 'accountingJournalAnes',})
        AccountingJournalAne.belongsTo(KmfKmnsList, {foreignKey: 'id_kmf_kmns_list', as: 'kmfKmmsList',})


        // Quan hệ giữa AccountingJournalAne và DivisionList
        DivisionList.hasMany(AccountingJournalAne, {foreignKey: 'id_division', as: 'accountingJournalAnes',})
        AccountingJournalAne.belongsTo(DivisionList, {foreignKey: 'id_division', as: 'divisionList',})

        // Quan hệ giữa AccountingJournalAne và TeamList
        TeamList.hasMany(AccountingJournalAne, {foreignKey: 'id_team', as: 'accountingJournalAnes',})
        AccountingJournalAne.belongsTo(TeamList, {foreignKey: 'id_team', as: 'teamList',})

        // Quan hệ giữa AccountingJournalAne và CashAccount
        CashAccount.hasMany(AccountingJournalAne, {foreignKey: 'id_cashaccount', as: 'accountingJournalAnes',})
        AccountingJournalAne.belongsTo(CashAccount, {foreignKey: 'id_cashaccount', as: 'cashAccount',})


        // Quan hệ giữa AccountJournalAne với  VasAccountList
        VasAccountList.hasMany(AccountingJournalAne, {foreignKey: 'id_tk_no', as: 'accountJournalAneNos',});
        AccountingJournalAne.belongsTo(VasAccountList, {foreignKey: 'id_tk_no', as: 'vasAccountListNo',});

        VasAccountList.hasMany(AccountingJournalAne, {foreignKey: 'id_tk_co', as: 'accountJournalAneCos',});
        AccountingJournalAne.belongsTo(VasAccountList, {foreignKey: 'id_tk_co', as: 'vasAccountListCo',});




  ///// Các quan hệ khác không liên quan đến AccountJournalAgl và AccountJournalAne

        // Quan hệ giữa NhanVien và ReportingLine
        NhanVien.hasMany(ReportingLine, {foreignKey: 'id_nhanvien', as: "reportingLines",});
        ReportingLine.belongsTo(NhanVien, {foreignKey: 'id_nhanvien', as: 'nhanVien',});

        NhanVien.hasMany(ReportingLine, {foreignKey: 'id_quan_ly_truc_tiep', as: "reportingLineQuanLyTrucTieps",});
        ReportingLine.belongsTo(NhanVien, {foreignKey: 'id_quan_ly_truc_tiep', as: 'nhanVienQuanLyTrucTiep',});


        // Quan hệ giữa Nhanvien và TeamList
        TeamList.hasMany(NhanVien, {foreignKey: 'id_team', as: "nhanViens",});
        NhanVien.belongsTo(TeamList, {foreignKey: 'id_team', as: 'teamList',});


        // Quan hệ giữa DivisionList với TeamLits đang không sử dungj nên tắt đi
        // DivisionList.hasMany(TeamList, {foreignKey: 'id_division', as: 'teamLists',});
        // TeamList.belongsTo(DivisionList, {foreignKey: 'id_division', as: 'divisionList',});



        await sequelize.sync();
        console.log("Database Synced");
    } catch (error) {
        console.error("Unable to connect to the database", error);
    }
};

export {
    sequelize,
    connection,
    User,
    Role,

    TeamList,
    DivisionList,
    VasAccountList,
    KmfKmnsList,
    NhanVien,
    CashAccount,
    ReportingLine,

    // Của Ma
    MaReportEquity,
    MaReportPlAaa,
    MaReportPlAgl,
    MaReportPlAne,
    MaReportPlLib,
    MaReportPlOs,
    MaReportWcAll,
    MaReportCashPlanningAgl,
    MaReportCashPlanningAne,
    MaReportCashPlanningAu,
    MaReportCashPlanningOs,
    MaReportCashPlanningLib,

    // Của Agl
    ContractListAgl,
    InvoiceListAgl,
    AccountingJournalAgl,
    AccountingJournalAglInvoiceListAgl,
    AccountingJournalAglContractListAgl,

    // Của Ane
    ContractListAne,
    InvoiceListAne,
    AccountingJournalAne,
    AccountingJournalAneInvoiceListAne,
    AccountingJournalAneContractListAne,


};
