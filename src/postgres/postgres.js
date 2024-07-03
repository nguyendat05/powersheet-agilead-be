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
import {createProductListModel} from "../models/productList.js";
import {createNhanVienModel} from "../models/nhanVien.js";
import {createIndustryListModel} from "../models/industryList.js";
import {createVasAccountListModel} from "../models/vasAccountList.js";
import {createKmfKmnsListModel} from "../models/kmfKmnsList.js";
import {createProjectListModel} from "../models/projectList.js";
import {createTaskManagerModel} from "../models/taskManager.js";
import {createCashAccountModel} from "../models/cashAccount.js";
import {createSupplierListModel} from "../models/supplierList.js";
import {createLeavePhepModel} from "../models/leavePhep.js";
import {createReportingLineModel} from "../models/reportingLine.js";
import {createInvoiceDetailAglModel} from "../models/invoiceDetailAgl.js";
import {createContractDetailAglModel} from "../models/contractDetailAgl.js";
import {createAccountingJournalAglModel} from "../models/accountingJournalAgl.js";
import {createAccountingJournalAglInvoiceListAglModel} from "../models/accountingJournalAglInvoiceListAgl.js";
import {createAccountingJournalAglContractListAglModel} from "../models/accountingJournalAglContractListAgl.js";
import {createAccountingJournalAglProductListAglModel} from "../models/accountingJournalAglProductListAgl.js";
import {createClientManagerModel} from "../models/clientManager.js";
import {createPaymentRequestsModel} from "../models/paymentRequest.js";
import {createCfrContentModel} from "../models/cfrContent.js";
import {createCfrProcessModel} from "../models/cfrProcess.js";
import {createMaReportEquityModel} from "../models/maReportEquity.js";
import {createMaReportWorkingCapitalModel} from "../models/maReportWorkingCapital.js";
import {createMaReportCashPlanningModel} from "../models/maReportCashPlanning.js";
import {createMaReportProfitLossHvaV3Model} from "../models/maReportProfitLossHvaV3.js";
import {createMaReportProfitLossASModel} from "../models/maReportProfitLossAS.js";
import {createMaReportProfitLossHLModel} from "../models/maReportProfitLossHL.js";
import {createMaReportProfitLossHvaV2Model} from "../models/maReportProfitLossHvaV2.js";
import {createMaReportProfitLossHvaV1Model} from "../models/maReportProfitLossHvaV1.js";
import {createContractListAneModel} from "../models/contractListAne.js";
import {createInvoiceListAneModel} from "../models/invoiceListAne.js";
import {createInvoiceDetailAneModel} from "../models/invoiceDetailAne.js";
import {createContractDetailAneModel} from "../models/contractDetailAne.js";
import {createAccountingJournalAneModel} from "../models/accountingJournalAnel.js";
import {createAccountingJournalAneInvoiceListAneModel} from "../models/accountingJournalAneInvoiceListAne.js";
import {createAccountingJournalAneContractListAneModel} from "../models/accountingJournalAneContractListAne.js";
import {createAccountingJournalAneProductListAneModel} from "../models/accountingJournalAneProductListAne.js";

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
let ProductList = null;
let NhanVien = null;
let IndustryList = null;
let VasAccountList = null;
let KmfKmnsList = null;
let ProjectList = null;
let TaskManager = null;
let CashAccount = null;
let SupplierList = null;
let LeavePhep = null;
let ReportingLine = null;
let ClientManager = null;
let PaymentRequests = null;
let CfrContent = null;
let CfrProcess = null;
let MaReportEquity = null;
let MaReportWorkingCapital = null;
let MaReportCashPlanning = null;
let MaReportProfitLossHvaV3 = null;
let MaReportProfitLossHL = null;
let MaReportProfitLossAS = null;
let MaReportProfitLossHvaV2 = null;
let MaReportProfitLossHvaV1 = null;

// Agl
let ContractListAgl = null;
let InvoiceListAgl = null;
let InvoiceDetailAgl = null;
let ContractDetailAgl = null;
let AccountingJournalAgl = null;
let AccountingJournalAglInvoiceListAgl = null;
let AccountingJournalAglContractListAgl = null;
let AccountingJournalAglProductListAgl = null;

// Ane
let ContractListAne = null;
let InvoiceListAne = null;
let InvoiceDetailAne = null;
let ContractDetailAne = null;
let AccountingJournalAne = null;
let AccountingJournalAneInvoiceListAne = null;
let AccountingJournalAneContractListAne = null;
let AccountingJournalAneProductListAne = null;
const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection DB successfully");

        User = await createUserModel(sequelize);
        Role = await createRoleModel(sequelize);
        VasAccountList = await createVasAccountListModel(sequelize);
        DivisionList = await createDivisionListModel(sequelize);
        ProductList = await createProductListModel(sequelize);
        NhanVien = await createNhanVienModel(sequelize);
        IndustryList = await createIndustryListModel(sequelize);
        KmfKmnsList = await createKmfKmnsListModel(sequelize);
        ProjectList = await createProjectListModel(sequelize);
        TaskManager = await createTaskManagerModel(sequelize);
        CashAccount = await createCashAccountModel(sequelize);
        SupplierList = await createSupplierListModel(sequelize);
        LeavePhep = await createLeavePhepModel(sequelize);
        ReportingLine = await createReportingLineModel(sequelize);
        TeamList = await createTeamListModel(sequelize);
        ClientManager = await createClientManagerModel(sequelize);
        PaymentRequests = await createPaymentRequestsModel(sequelize);
        CfrContent = await createCfrContentModel(sequelize);
        CfrProcess = await createCfrProcessModel(sequelize);
        MaReportEquity = await createMaReportEquityModel(sequelize);
        MaReportWorkingCapital = await createMaReportWorkingCapitalModel(sequelize);
        MaReportCashPlanning = await createMaReportCashPlanningModel(sequelize);
        MaReportProfitLossHvaV3 = await createMaReportProfitLossHvaV3Model(sequelize);
        MaReportProfitLossHvaV2 = await createMaReportProfitLossHvaV2Model(sequelize);
        MaReportProfitLossHvaV1 = await createMaReportProfitLossHvaV1Model(sequelize);
        MaReportProfitLossHL = await createMaReportProfitLossHLModel(sequelize);
        MaReportProfitLossAS = await createMaReportProfitLossASModel(sequelize);

        // Agl
        ContractListAgl = await createContractListAglModel(sequelize);
        InvoiceListAgl = await createInvoiceListAglModel(sequelize);
        InvoiceDetailAgl = await createInvoiceDetailAglModel(sequelize);
        ContractDetailAgl = await createContractDetailAglModel(sequelize);
        AccountingJournalAgl = await createAccountingJournalAglModel(sequelize);
        AccountingJournalAglInvoiceListAgl = await createAccountingJournalAglInvoiceListAglModel(sequelize);
        AccountingJournalAglContractListAgl = await createAccountingJournalAglContractListAglModel(sequelize);
        AccountingJournalAglProductListAgl = await createAccountingJournalAglProductListAglModel(sequelize);

        // Ane
        ContractListAne = await createContractListAneModel(sequelize);
        InvoiceListAne = await createInvoiceListAneModel(sequelize);
        InvoiceDetailAne = await createInvoiceDetailAneModel(sequelize);
        ContractDetailAne = await createContractDetailAneModel(sequelize);
        AccountingJournalAne = await createAccountingJournalAneModel(sequelize);
        AccountingJournalAneInvoiceListAne = await createAccountingJournalAneInvoiceListAneModel(sequelize);
        AccountingJournalAneContractListAne = await createAccountingJournalAneContractListAneModel(sequelize);
        AccountingJournalAneProductListAne = await createAccountingJournalAneProductListAneModel(sequelize);


 //// Quan hệ AccountingJournalAgl với các đối tượng khác

        // Quan hệ giữa 2 bảng AccountingJournalAgl và ProductList
        ProductList.hasMany(AccountingJournalAglProductListAgl, {foreignKey: 'id_product', as: 'accountingJournalAglProductListAgls',})
        AccountingJournalAglProductListAgl.belongsTo(ProductList, {foreignKey: 'id_product', as: 'productList',})

        AccountingJournalAgl.hasMany(AccountingJournalAglProductListAgl, {foreignKey: 'id_accounting_journal_agl', as: 'accountingJournalAglProductListAgls',})
        AccountingJournalAglProductListAgl.belongsTo(AccountingJournalAgl, {foreignKey: 'id_accounting_journal_agl', as: 'accountingJournalAgl',})


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


        // Quan hệ giữa AccountingJournalAgl và IndustryList
        IndustryList.hasMany(AccountingJournalAgl, {foreignKey: 'id_industry', as: 'accountingJournalAgls',})
        AccountingJournalAgl.belongsTo(IndustryList, {foreignKey: 'id_industry', as: 'industryList',})

        // Quan hệ giữa AccountingJournal và DivisionList
        DivisionList.hasMany(AccountingJournalAgl, {foreignKey: 'id_division', as: 'accountingJournalAgls',})
        AccountingJournalAgl.belongsTo(DivisionList, {foreignKey: 'id_division', as: 'divisionList',})

        // Quan hệ giữa AccountingJournal và TeamList
        TeamList.hasMany(AccountingJournalAgl, {foreignKey: 'id_team', as: 'accountingJournalAgls',})
        AccountingJournalAgl.belongsTo(TeamList, {foreignKey: 'id_team', as: 'teamList',})

        // Quan hệ giữa AccountingJournalAgl và CashAccount
        CashAccount.hasMany(AccountingJournalAgl, {foreignKey: 'id_cashaccount', as: 'accountingJournalAgls',})
        AccountingJournalAgl.belongsTo(CashAccount, {foreignKey: 'id_cashaccount', as: 'cashAccount',})

        // Quan hệ giữa AccountingJournal và ProjectList
        ProjectList.hasMany(AccountingJournalAgl, {foreignKey: 'id_project', as: 'accountingJournalAgls',})
        AccountingJournalAgl.belongsTo(ProjectList, {foreignKey: 'id_project', as: 'projectList',})

        // Quan hệ giữa AccountingJournal và SupplierList
        SupplierList.hasMany(AccountingJournalAgl, {foreignKey: 'id_supplier', as: 'accountingJournalAgls',})
        AccountingJournalAgl.belongsTo(SupplierList, {foreignKey: 'id_supplier', as: 'supplierList',})

        // Quan hệ giữa ClientManager với AccountJournalAgl
        ClientManager.hasMany(AccountingJournalAgl, {foreignKey: 'id_khach_hang', as: 'accountingJournalAgls',});
        AccountingJournalAgl.belongsTo(ClientManager, {foreignKey: 'id_khach_hang', as: 'clientManager',});


        // Quan hệ giữa VasAccountList với AccountJournalAgl
        VasAccountList.hasMany(AccountingJournalAgl, {foreignKey: 'id_tk_no', as: 'accountJournalAglNos',});
        AccountingJournalAgl.belongsTo(VasAccountList, {foreignKey: 'id_tk_no', as: 'vasAccountListNo',});

        VasAccountList.hasMany(AccountingJournalAgl, {foreignKey: 'id_tk_co', as: 'accountJournalAglCos',});
        AccountingJournalAgl.belongsTo(VasAccountList, {foreignKey: 'id_tk_co', as: 'vasAccountListCo',});


 //// Quan hệ AccountingJournalAne với các đối tượng khác

        // Quan hệ giữa 2 bảng AccountingJournalAne và ProductListAne
        ProductList.hasMany(AccountingJournalAneProductListAne, {foreignKey: 'id_product', as: 'accountingJournalAneProductListAnes',})
        AccountingJournalAneProductListAne.belongsTo(ProductList, {foreignKey: 'id_product', as: 'productList',})

        AccountingJournalAne.hasMany(AccountingJournalAneProductListAne, {foreignKey: 'id_accounting_journal_ane', as: 'accountingJournalAglProductListAnes',})
        AccountingJournalAneProductListAne.belongsTo(AccountingJournalAne, {foreignKey: 'id_accounting_journal_ane', as: 'accountingJournalAne',})


        // Quan hệ giữa 2 bảng AccountingJournalAne và ContractListAne
        ContractListAne.hasMany(AccountingJournalAneContractListAne, {foreignKey: 'id_contract_ane', as: "accountingJournalAneContractListAnes",});
        AccountingJournalAneContractListAne.belongsTo(ContractListAne, {foreignKey: 'id_contract_ane', as: "contractListAne",})

        AccountingJournalAne.hasMany(AccountingJournalAneContractListAne, {foreignKey: 'id_accounting_journal_ane', as: "accountingJournalAneContractListAnes",})
        AccountingJournalAneContractListAne.belongsTo(AccountingJournalAne, {foreignKey: 'id_accounting_journal_ane', as: "accountingJournalAne",})


        // Quan hệ giữa 2 bảng AccountingJournalAne và InvoiceListAne
        InvoiceListAne.hasMany(AccountingJournalAneInvoiceListAne, {foreignKey: 'id_invoice_ane', as: "accountingJournalAneInvoiceListAnes",});
        AccountingJournalAglInvoiceListAgl.belongsTo(InvoiceListAgl, {foreignKey: 'id_invoice_ane', as: "invoiceListAne",});

        AccountingJournalAne.hasMany(AccountingJournalAneInvoiceListAne, {foreignKey: 'id_accounting_journal_ane', as: "accountingJournalAneInvoiceListAnes",})
        AccountingJournalAneInvoiceListAne.belongsTo(AccountingJournalAne, {foreignKey: 'id_accounting_journal_ane', as: "accountingJournalAne",})


        // Quan hệ giữa AccountingJournalAne và NhanViennn
        NhanVien.hasMany(AccountingJournalAne, {foreignKey: 'id_nhanvien', as: 'accountingJournalAnes'})
        AccountingJournalAne.belongsTo(NhanVien, {foreignKey: "id_nhanvien", as: 'nhanVien',})


        // Quan hệ giữa AccountingJournalAne và KmfKmnsList
        KmfKmnsList.hasMany(AccountingJournalAne, {foreignKey: 'id_kmf_kmns_list', as: 'accountingJournalAnes',})
        AccountingJournalAne.belongsTo(KmfKmnsList, {foreignKey: 'id_kmf_kmns_list', as: 'kmfKmmsList',})


        // Quan hệ giữa AccountingJournalAne và IndustryList
        IndustryList.hasMany(AccountingJournalAne, {foreignKey: 'id_industry', as: 'accountingJournalAnes',})
        AccountingJournalAne.belongsTo(IndustryList, {foreignKey: 'id_industry', as: 'industryList',})

        // Quan hệ giữa AccountingJournalAne và DivisionList
        DivisionList.hasMany(AccountingJournalAne, {foreignKey: 'id_division', as: 'accountingJournalAnes',})
        AccountingJournalAne.belongsTo(DivisionList, {foreignKey: 'id_division', as: 'divisionList',})

        // Quan hệ giữa AccountingJournalAne và TeamList
        TeamList.hasMany(AccountingJournalAne, {foreignKey: 'id_team', as: 'accountingJournalAnes',})
        AccountingJournalAne.belongsTo(TeamList, {foreignKey: 'id_team', as: 'teamList',})

        // Quan hệ giữa AccountingJournalAne và CashAccount
        CashAccount.hasMany(AccountingJournalAne, {foreignKey: 'id_cashaccount', as: 'accountingJournalAnes',})
        AccountingJournalAne.belongsTo(CashAccount, {foreignKey: 'id_cashaccount', as: 'cashAccount',})

        // Quan hệ giữa AccountingJournalAne và ProjectList
        ProjectList.hasMany(AccountingJournalAne, {foreignKey: 'id_project', as: 'accountingJournalAnes',})
        AccountingJournalAne.belongsTo(ProjectList, {foreignKey: 'id_project', as: 'projectList',})

        // Quan hệ giữa AccountingJournalAne và SupplierList
        SupplierList.hasMany(AccountingJournalAne, {foreignKey: 'id_supplier', as: 'accountingJournalAnes',})
        AccountingJournalAne.belongsTo(SupplierList, {foreignKey: 'id_supplier', as: 'supplierList',})

        // Quan hệ giữa ClientManager với AccountJournalAne
        ClientManager.hasMany(AccountingJournalAne, {foreignKey: 'id_khach_hang', as: 'accountingJournalAnes',});
        AccountingJournalAne.belongsTo(ClientManager, {foreignKey: 'id_khach_hang', as: 'clientManager',});


        // Quan hệ giữa VasAccountList với AccountJournalAne
        VasAccountList.hasMany(AccountingJournalAne, {foreignKey: 'id_tk_no', as: 'accountJournalAneNos',});
        AccountingJournalAne.belongsTo(VasAccountList, {foreignKey: 'id_tk_no', as: 'vasAccountListNo',});

        VasAccountList.hasMany(AccountingJournalAne, {foreignKey: 'id_tk_co', as: 'accountJournalAneCos',});
        AccountingJournalAne.belongsTo(VasAccountList, {foreignKey: 'id_tk_co', as: 'vasAccountListCo',});




  ///// Các quan hệ khác không liên quan đến AccountJournalAgl và AccountJournalAne
        // Quan hệ giữa Nhanvien và ReportingLine
        NhanVien.hasMany(ReportingLine, {foreignKey: 'id_nhanvien', as: "reportings",});
        ReportingLine.belongsTo(NhanVien, {foreignKey: 'id_nhanvien', as: 'nhanvien',});

        NhanVien.hasMany(ReportingLine, {foreignKey: 'id_quan_ly_truc_tiep', as: "reportingQuanLyTrucTieps",});
        ReportingLine.belongsTo(NhanVien, {foreignKey: 'id_quan_ly_truc_tiep', as: 'nhanvienQuanLyTrucTiep',});


        // Quan hệ giữa Nhanvien và LeavePhep
        NhanVien.hasMany(LeavePhep, {foreignKey: 'id_nguoi_de_nghi', as: "leavePhepDeNghis",});
        LeavePhep.belongsTo(NhanVien, {foreignKey: 'id_nguoi_de_nghi', as: 'nhanvienDeNghi',});

        NhanVien.hasMany(LeavePhep, {foreignKey: 'id_quan_Ly_truc_tiep', as: "leavePhepQuanLyTrucTieps",});
        LeavePhep.belongsTo(NhanVien, {foreignKey: 'id_quan_Ly_truc_tiep', as: 'nhanvienQuanLyTrucTiep',});

        // Quan hệ giữa Nhanvien và TeamList
        TeamList.hasMany(NhanVien, {foreignKey: 'id_team', as: "nhanviens",});
        NhanVien.belongsTo(TeamList, {foreignKey: 'id_team', as: 'teamList',});


        // Quan hệ Chi tiết hóa đơn giữa InvoiceListAgl và Product
        ProductList.hasMany(InvoiceDetailAgl, {foreignKey: 'id_product', as: "invoiceDetailAgls",});
        InvoiceDetailAgl.belongsTo(ProductList, {foreignKey: 'id_product', as: "product",});

        InvoiceListAgl.hasMany(InvoiceDetailAgl, {foreignKey: 'id_invoice', as: "invoiceDetailAgls",});
        InvoiceDetailAgl.belongsTo(InvoiceListAgl, {foreignKey: 'id_invoice', as: "invoiceListAgl",});


        // Quan hệ Chi tiết hợp đồng giuwax ContracListAgl và Product
        ContractListAgl.hasMany(ContractDetailAgl, {foreignKey: 'id_contractList', as: 'contractDetailAgls',});
        ContractDetailAgl.belongsTo(ContractListAgl, {foreignKey: 'id_contractList', as: 'contractListAgl',});

        ProductList.hasMany(ContractDetailAgl, {foreignKey: 'id_product', as: 'contractDetailAgls',});
        ContractDetailAgl.belongsTo(ProductList, {foreignKey: 'id_product', as: 'productList',});


        // Quan hệ giữa DivisionList với TeamLits
        DivisionList.hasMany(TeamList, {foreignKey: 'id_division', as: 'teamLists',});
        TeamList.belongsTo(DivisionList, {foreignKey: 'id_division', as: 'divisionList',});


        // Quan hệ giữa ClientManager với ContractListAgl
        ClientManager.hasMany(ContractListAgl, {foreignKey: 'id_khach_hang', as: 'contractListAgls',});
        ContractListAgl.belongsTo(ClientManager, {foreignKey: 'id_khach_hang', as: 'clientManager',});


        // Quan hệ giữa ClientManager với InvoiceListAgl
        ClientManager.hasMany(InvoiceListAgl, {foreignKey: 'id_khach_hang', as: 'invoiceListAgls',});
        InvoiceListAgl.belongsTo(ClientManager, {foreignKey: 'id_khach_hang', as: 'clientManager'});

        // Quan hệ giữa ClientManager với IndustryList
        IndustryList.hasMany(ClientManager, {foreignKey: 'id_industry', as: 'clientManagers',});
        ClientManager.belongsTo(IndustryList, {foreignKey: 'id_industry', as: 'industryList'});

        // Quan hệ giữa TaskManager với TeamList
        TeamList.hasMany(TaskManager, {foreignKey: 'id_team', as: 'taskManagers',});
        TaskManager.belongsTo(TeamList, {foreignKey: 'id_team', as: 'teamList'});

        // Quan hệ giữa CfrProcess với NhanVien
        NhanVien.hasMany(CfrProcess, {foreignKey: 'id_nhanvien_de_nghi', as: 'cfrProcessDeNghis',});
        CfrProcess.belongsTo(NhanVien, {foreignKey: 'id_nhanvien_de_nghi', as: 'nhanvienDeNghi'});

        NhanVien.hasMany(CfrProcess, {foreignKey: 'id_nhanvien_duyet', as: 'cfrProcesDuyets'});
        CfrProcess.belongsTo(NhanVien, {foreignKey: 'id_nhanvien_duyet', as: 'nhanvienDuyet'});

        // Quan hệ giứa PaymentRequests với Nhanvien
        NhanVien.hasMany(PaymentRequests, {foreignKey: 'id_nhanvien_de_nghi', as: 'paymentRequestDeNghis',});
        PaymentRequests.belongsTo(NhanVien, {foreignKey: 'id_nhanvien_de_nghi', as: 'nhanvienDeNghi'});

        NhanVien.hasMany(PaymentRequests, {foreignKey: 'id_nhanvien_ke_toan', as: 'paymentRequestKetoans'});
        PaymentRequests.belongsTo(NhanVien, {foreignKey: 'id_nhanvien_ke_toan', as: 'nhanvienKeToan'});

        NhanVien.hasMany(PaymentRequests, {foreignKey: 'id_nhanvien_manager', as: 'paymentRequestManagers'});
        PaymentRequests.belongsTo(NhanVien, {foreignKey: 'id_nhanvien_manager', as: 'nhanvienManager'});

        NhanVien.hasMany(PaymentRequests, {foreignKey: 'id_nhanvien_giam_doc', as: 'paymentRequestGiamDocs'});
        PaymentRequests.belongsTo(NhanVien, {foreignKey: 'id_nhanvien_giam_doc', as: 'nhanvienGiamDoc'});


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
    ProductList,
    VasAccountList,
    KmfKmnsList,
    IndustryList,
    NhanVien,
    ProjectList,
    TaskManager,
    CashAccount,
    SupplierList,
    LeavePhep,
    ReportingLine,
    ClientManager,
    CfrProcess,
    CfrContent,
    PaymentRequests,
    MaReportEquity,
    MaReportWorkingCapital,
    MaReportCashPlanning,
    MaReportProfitLossHvaV3,
    MaReportProfitLossHvaV2,
    MaReportProfitLossHvaV1,
    MaReportProfitLossHL,
    MaReportProfitLossAS,

    // Của Agl
    ContractListAgl,
    ContractDetailAgl,
    InvoiceListAgl,
    InvoiceDetailAgl,
    AccountingJournalAgl,
    AccountingJournalAglInvoiceListAgl,
    AccountingJournalAglContractListAgl,
    AccountingJournalAglProductListAgl,

    // Của Ane
    ContractListAne,
    ContractDetailAne,
    InvoiceListAne,
    InvoiceDetailAne,
    AccountingJournalAne,
    AccountingJournalAneInvoiceListAne,
    AccountingJournalAneContractListAne,
    AccountingJournalAneProductListAne,


};
