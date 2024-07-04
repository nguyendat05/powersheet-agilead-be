import nhanVienRoutes from "./nhanVienRoutes.js";
import maReportCashPlanningAglRoutes from "./maReportCashPlanningAglRoutes.js";
import maReportEquityRoutes from "./maReportEquityRoutes.js";
import maReportingWcAllRoutes from "./maReportingWcAllRoutes.js";
import cashAccountRoutes from "./cashAccountRoutes.js";
import divisionListRoutes from "./divisionListRoutes.js";
import reportingLineRoutes from "./reportingLineRoutes.js";
import teamListRoutes from "./teamListRoutes.js";
import vasAccountListRoutes from "./vasAccountListRoutes.js";
import kmfKmnsListRoutes from "./kmfKmnsListRoutes.js";
import maReportCashPlanningAneRoutes from "./maReportCashPlanningAneRoutes.js";
import maReportCashPlanningAuRoutes from "./maReportCashPlanningAuRoutes.js";
import maReportCashPlanningLibRoutes from "./maReportCashPlanningLibRoutes.js";
import maReportCashPlanningOsRoutes from "./maReportCashPlanningOsRoutes.js";
import invoiceListAneRoutes from "./invoiceListAneRoutes.js";
import invoiceListAglRoutes from "./invoiceListAglRoutes.js";
import contractListAglRoutes from "./contractListAglRoutes.js";
import contractListAneRoutes from "./contractListAneRoutes.js";
import accountingJournalAglRoutes from "./accountingJournalAglRoutes.js";
import accountingJournalAneRoutes from "./accountingJournalAneRoutes.js";
import accountingJournalAglInvoiceListAglRoutes from "./accountingJournalAglInvoiceListAglRoutes.js";
import accountingJournalAneInvoiceListAneRoutes from "./accountingJournalAneInvoiceListAneRoutes.js";
import accountingJournalAglContractListAglRoutes from "./accountingJournalAglContractListAglRoutes.js";
import accountingJournalAneContractListAneRoutes from "./accountingJournalAneContractListAneRoutes.js";

export const allRouter = (app) => {

    // api Ma và các api đã check
    app.use("/api/ma-report-cash-planning-agl", maReportCashPlanningAglRoutes);
    app.use("/api/ma-report-cash-planning-ane", maReportCashPlanningAneRoutes);
    app.use("/api/ma-report-cash-planning-au", maReportCashPlanningAuRoutes);
    app.use("/api/ma-report-cash-planning-lib", maReportCashPlanningLibRoutes);
    app.use("/api/ma-report-cash-planning-os", maReportCashPlanningOsRoutes);
    app.use("/api/ma-report-wc-all",maReportingWcAllRoutes);
    app.use("/api/ma-report-equity", maReportEquityRoutes);

    app.use("/api/nhan-vien", nhanVienRoutes);
    app.use("/api/vas-account-list",vasAccountListRoutes);
    app.use("/api/team-list",teamListRoutes);
    app.use("/api/reporting-line",reportingLineRoutes);
    app.use("/api/kmf-kmns-list",kmfKmnsListRoutes);
    app.use("/api/invoice-list-agl",invoiceListAglRoutes);
    app.use("/api/invoice-list-ane",invoiceListAneRoutes);
    app.use("/api/contract-list-agl",contractListAglRoutes);
    app.use("/api/contract-list-ane",contractListAneRoutes);
    app.use("/api/division-list",divisionListRoutes);
    app.use("/api/cash-account",cashAccountRoutes);
    app.use("/api/accounting-journal-agl",accountingJournalAglRoutes);
    app.use("/api/accounting-journal-ane",accountingJournalAneRoutes);
    app.use("/api/accounting-journal-agl-invoice-list-agl",accountingJournalAglInvoiceListAglRoutes);
    app.use("/api/accounting-journal-ane-invoice-list-ane",accountingJournalAneInvoiceListAneRoutes);
    app.use("/api/accounting-journal-agl-contract-list-agl",accountingJournalAglContractListAglRoutes);
    app.use("/api/accounting-journal-ane-contract-list-ane",accountingJournalAneContractListAneRoutes);




};