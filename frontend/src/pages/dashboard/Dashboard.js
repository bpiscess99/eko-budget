import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./Dashboard.css";
import { Link } from 'react-router-dom';



const Dashboard = () => {
  return (
    <Navbar expand="lg" >
    <Nav>
      {/* Main Navbar */}
      <NavDropdown title="Dashboards" id="main-nav-dropdown">
        
        {/* Sales 360 Dashboard with nested sub-menu */}
        <NavDropdown title="Sales 360 Dashboard" id="sales360-nav-dropdown" drop="right" className="multi-level-dropdown">
          <NavDropdown.Item>Sales 360 Dashboard</NavDropdown.Item>
        </NavDropdown>
        
       {/* Purchase 360 Dashboard with nested sub-menu */}
       <NavDropdown
          title="Purchase 360 Dashboard"
          id="purchase360-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Purchase 360</NavDropdown.Item>
        </NavDropdown>

        {/* Hr & Payroll Dashboard with nested sub-menu */}
        <NavDropdown
          title="Hr & Payroll Dashboard"
          id="hr-payroll-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Hr & Payroll Dashboard</NavDropdown.Item>
        </NavDropdown>

        {/* Inventory 360 Dashboard with nested sub-menu */}
        <NavDropdown
          title="Finance 360 Dashboard"
          id="finance360-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Finance 360 Dashboard</NavDropdown.Item>
        </NavDropdown>

        {/* PM Dashboard with nested sub-menu */}
        <NavDropdown
          title="PM Dashboard"
          id="pm-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>PM Dashboard</NavDropdown.Item>
        </NavDropdown>
        
      </NavDropdown>
      

       {/* Application Setup */}
       <NavDropdown title="Application Setup" id="main-nav-dropdown">
        
        {/* Classification with nested sub-menu */}
        <NavDropdown title="Classifications" id="classification-nav-dropdown" drop="right" className="multi-level-dropdown">
          <NavDropdown.Item>Departments</NavDropdown.Item>
          <NavDropdown.Item>Classes</NavDropdown.Item>
          <NavDropdown.Item>Countries</NavDropdown.Item>
          <NavDropdown.Item>States</NavDropdown.Item>
          <NavDropdown.Item>City</NavDropdown.Item>
          <NavDropdown.Item>Area Type</NavDropdown.Item>
          <NavDropdown.Item>Entity Group</NavDropdown.Item>
        </NavDropdown>
        
       {/* Set Up Taxes with nested sub-menu */}
       <NavDropdown
          title="Set Up Taxes"
          id="taxes-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Taxes Types</NavDropdown.Item>
          <NavDropdown.Item>Taxes Items</NavDropdown.Item>
        </NavDropdown>

        {/*  LOVs Setup with nested sub-menu */}
        <NavDropdown
          title="LOVs Setup"
          id="LOVs-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Users list of values</NavDropdown.Item>
          <NavDropdown.Item>Cost Categories</NavDropdown.Item>
        </NavDropdown>

        {/* Distribution Setup with nested sub-menu */}
        <NavDropdown
          title="Distribution Setup"
          id="distribution-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Vehicle</NavDropdown.Item>
          <NavDropdown.Item>Routes</NavDropdown.Item>
          <NavDropdown.Item>Customer Map View</NavDropdown.Item>
          <NavDropdown.Item>Employee Location Routes</NavDropdown.Item>
          <NavDropdown.Item>Fuel Price list</NavDropdown.Item>
        </NavDropdown>

        {/* Data Upload with nested sub-menu */}
        <NavDropdown
          title="Data Upload"
          id="data-upload-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Items Upload</NavDropdown.Item>
          <NavDropdown.Item>Item Category Upload</NavDropdown.Item>
          <NavDropdown.Item>Employees Upload</NavDropdown.Item>
          <NavDropdown.Item>Departments Upload</NavDropdown.Item>
          <NavDropdown.Item>Customers Upload</NavDropdown.Item>
          <NavDropdown.Item>Inventory Adjustment Upload</NavDropdown.Item>
          <NavDropdown.Item>Vendors Upload</NavDropdown.Item>
          <NavDropdown.Item>Journal Entry Upload</NavDropdown.Item>
          <NavDropdown.Item>Units Types Upload</NavDropdown.Item>
          <NavDropdown.Item>Salary Upload</NavDropdown.Item>
          <NavDropdown.Item>Pay Element Entries Upload</NavDropdown.Item>
          <NavDropdown.Item>BOM Upload</NavDropdown.Item>
          <NavDropdown.Item>Accounts Upload</NavDropdown.Item>
          <NavDropdown.Item>City Upload</NavDropdown.Item>
        </NavDropdown>

        {/* Approval Workflow with nested sub-menu */}
      <NavDropdown
          title="Approval Workflow"
          id="approval-workflow-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Approval Groups</NavDropdown.Item>
          <NavDropdown.Item>Approval Rules</NavDropdown.Item>
          <NavDropdown.Item>Vacation Rules</NavDropdown.Item>
        </NavDropdown>
        
      </NavDropdown>

         {/* Financial Module */}
         <NavDropdown title="Financial Module" id="main-nav-dropdown">
        
        {/* Financials with nested sub-menu */}
        <NavDropdown title="Financials" id="financials-nav-dropdown" drop="right" className="multi-level-dropdown">
          <NavDropdown.Item>Journal Entries</NavDropdown.Item>
          <NavDropdown.Item>Post Dated Cheque's</NavDropdown.Item>
          <NavDropdown.Item>Recurring Journal</NavDropdown.Item>
          <NavDropdown.Item>Budgets</NavDropdown.Item>
          <NavDropdown.Item>Bank Reconciliation</NavDropdown.Item>
          <NavDropdown.Item>Accounts Closing - Retained Earning Entry</NavDropdown.Item>
        </NavDropdown>
        
       {/* Cash & Banks with nested sub-menu */}
       <NavDropdown
          title="Cash & Banks"
          id="cash-bank-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Make Payments</NavDropdown.Item>
          <NavDropdown.Item>Make Receipts</NavDropdown.Item>
          <NavDropdown.Item>Route Wise Cash Recovery</NavDropdown.Item>
          <NavDropdown.Item>Employee Advances</NavDropdown.Item>
          <NavDropdown.Item>Employee Loans</NavDropdown.Item>
          <NavDropdown.Item>Funds Issue</NavDropdown.Item>
          <NavDropdown.Item>Funds Receiving</NavDropdown.Item>
        </NavDropdown>

        {/* Accounting Setup with nested sub-menu */}
        <NavDropdown
          title="Accounting Setup"
          id="accounting-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Currencies</NavDropdown.Item>
          <NavDropdown.Item>Payment Terms</NavDropdown.Item>
          <NavDropdown.Item>Account Period</NavDropdown.Item>
          <NavDropdown.Item>Merge Account Setup</NavDropdown.Item>
        </NavDropdown>

        {/* Fixed Asset with nested sub-menu */}
        <NavDropdown
          title="Fixed Asset"
          id="fixed-asset-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Fixed Assets Register</NavDropdown.Item>
          <NavDropdown.Item>Asset Category</NavDropdown.Item>
          <NavDropdown.Item>Fixed Asset Depreciation</NavDropdown.Item>
          <NavDropdown.Item>Asset Depreciation Calculation</NavDropdown.Item>
          <NavDropdown.Item>Revaluation of Asset</NavDropdown.Item>
          <NavDropdown.Item>Assets Ledger</NavDropdown.Item>
          <NavDropdown.Item>Fixed Assets Detail Report</NavDropdown.Item>
          <NavDropdown.Item>Fixed Assets Category Report</NavDropdown.Item>
        </NavDropdown>

        {/* Asset Maintenance  with nested sub-menu */}
        <NavDropdown
          title="Asset Maintenance "
          id="asset-maintenance-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Maintenance Request</NavDropdown.Item>
          <NavDropdown.Item>Supervisor Activity</NavDropdown.Item>
          <NavDropdown.Item>Technician Activity</NavDropdown.Item>
          <NavDropdown.Item>Vendor Activity</NavDropdown.Item>
          <NavDropdown.Item>Maintenance Job Cards</NavDropdown.Item>
        </NavDropdown>

        {/* Financial Reports with nested sub-menu */}
      <NavDropdown
          title="Financial Reports"
          id="financial-reports-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Account Ledger</NavDropdown.Item>
          <NavDropdown.Item>Cash / Bank Summary</NavDropdown.Item>
          <NavDropdown.Item>Accounts Closing Balances</NavDropdown.Item>
          <NavDropdown.Item>Trial balance</NavDropdown.Item>
                <NavDropdown.Item>Trial balance Details</NavDropdown.Item>
                <NavDropdown.Item>Trial balance Month Wise</NavDropdown.Item>
                <NavDropdown.Item>Balance Sheet Report</NavDropdown.Item>
                <NavDropdown.Item>Profit / Loss Statement</NavDropdown.Item>
                <NavDropdown.Item>Working Capital Report</NavDropdown.Item>
                <NavDropdown.Item>Budget Status Report</NavDropdown.Item>
                <NavDropdown.Item>Cash Flow Statement</NavDropdown.Item>
                <NavDropdown.Item>Daily Cash Book Report</NavDropdown.Item>
                <NavDropdown.Item>Cash In Out Details</NavDropdown.Item>
                <NavDropdown.Item>Payment and Receipt Summary</NavDropdown.Item>
                <NavDropdown.Item>Cash / Bank Ledger</NavDropdown.Item>
                <NavDropdown.Item>General Journal Report</NavDropdown.Item>
                <NavDropdown.Item>Daily Expense Report</NavDropdown.Item>
                <NavDropdown.Item>Daily Expense Summary</NavDropdown.Item>
                    </NavDropdown>
      </NavDropdown>

      {/* Inventory Module Navbar */}
      <NavDropdown title="Inventory Module" id="main-nav-dropdown">
        
        {/* Items Setup with nested sub-menu */}
        <NavDropdown title="Items Setup" id="items-setup-nav-dropdown" drop="right" className="multi-level-dropdown">
        <NavDropdown.Item as={Link} to="/items">Items</NavDropdown.Item>
                <NavDropdown.Item>Item Category</NavDropdown.Item>
                <NavDropdown.Item>Units Type</NavDropdown.Item>
                <NavDropdown.Item>Items Barcode Generate</NavDropdown.Item>
                <NavDropdown.Item>Discount Policies</NavDropdown.Item>
        </NavDropdown>
        
       {/* Inventory Transaction with nested sub-menu */}
       <NavDropdown
          title="Inventory Transaction"
          id="inventory-transaction-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
         <NavDropdown.Item>Inventory Adjustment</NavDropdown.Item>
                <NavDropdown.Item>Inventory Transfer</NavDropdown.Item>
                <NavDropdown.Item>Material Issue Note</NavDropdown.Item>
                <NavDropdown.Item>Material Return Note</NavDropdown.Item>
                <NavDropdown.Item>Transfer Order</NavDropdown.Item>
                <NavDropdown.Item>Pending Delivery Challan</NavDropdown.Item>
                <NavDropdown.Item>Pending Receive Order List</NavDropdown.Item>
                <NavDropdown.Item>Stock Taking</NavDropdown.Item>
        </NavDropdown>

        {/* Gate Pass Management with nested sub-menu */}
        <NavDropdown
          title="Gate Pass Management"
          id="gate-pass-management-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Gate Pass In</NavDropdown.Item>
          <NavDropdown.Item>Gate Pass Out</NavDropdown.Item>
        </NavDropdown>

        {/*  Gate Pass Reports with nested sub-menu */}
        <NavDropdown
          title=" Gate Pass Reports"
          id="gate-pass-report-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Inward Returnable Summary Reports</NavDropdown.Item>
          <NavDropdown.Item>Outward Returnable Summary Reports</NavDropdown.Item>
          <NavDropdown.Item>Gate Pass In Out Details Report</NavDropdown.Item>
          </NavDropdown>

        {/* Item Reports with nested sub-menu */}
        <NavDropdown
          title="Item Reports"
          id="item-reports-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Item Closing As On Date Report</NavDropdown.Item>
                <NavDropdown.Item>Items Ledger</NavDropdown.Item>
                <NavDropdown.Item>Stock Management Report</NavDropdown.Item>
                <NavDropdown.Item>Stock Movement Detail Report</NavDropdown.Item>
                <NavDropdown.Item>Store Wise CLosing Balance Report</NavDropdown.Item>
                <NavDropdown.Item>Inventory Profit Margin</NavDropdown.Item>
                <NavDropdown.Item>Items Price List</NavDropdown.Item>
                <NavDropdown.Item>Inventory Profit Margin Summary</NavDropdown.Item>
                <NavDropdown.Item>Inventory Transfer</NavDropdown.Item>
                <NavDropdown.Item>Inventory Adjustment</NavDropdown.Item>
                <NavDropdown.Item>Transfer Order</NavDropdown.Item>
                <NavDropdown.Item>Minimum Stock Report</NavDropdown.Item>
                <NavDropdown.Item>Re Order Level Report</NavDropdown.Item>
                <NavDropdown.Item>Requisition Report</NavDropdown.Item>
        </NavDropdown>

      </NavDropdown>

      {/* Purchase Module Navbar */}
      <NavDropdown title="Purchase Module" id="main-nav-dropdown">
        
        {/* Vendors Define with nested sub-menu */}
        <NavDropdown title="Vendor Define" id="vendor-define-nav-dropdown" drop="right" className="multi-level-dropdown">
        <NavDropdown.Item>Items</NavDropdown.Item>
                <NavDropdown.Item>Vendors</NavDropdown.Item>
        </NavDropdown>
        
       {/* Procurement with nested sub-menu */}
       <NavDropdown
          title="Procurement"
          id="procurement-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
         <NavDropdown.Item>Requisition</NavDropdown.Item>
                <NavDropdown.Item>Requisition For Procurement</NavDropdown.Item>
                <NavDropdown.Item>RFQ</NavDropdown.Item>
                <NavDropdown.Item>Purchase Quotation</NavDropdown.Item>
        </NavDropdown>

        {/* Purchase with nested sub-menu */}
        <NavDropdown
          title="Purchase"
          id="purchase-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Purchase Order</NavDropdown.Item>
                <NavDropdown.Item>Purchase Contract</NavDropdown.Item>
                <NavDropdown.Item>Pending Receive Orders List</NavDropdown.Item>
                <NavDropdown.Item>Items Receipt Note</NavDropdown.Item>
                <NavDropdown.Item>Generate Consolidate Vendor Bill</NavDropdown.Item>
        </NavDropdown>

        {/*  Import with nested sub-menu */}
        <NavDropdown
          title="Import"
          id="import-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
         <NavDropdown.Item>Pending Inbound Shipment</NavDropdown.Item>
                <NavDropdown.Item>Inbound Shipment</NavDropdown.Item>
                <NavDropdown.Item>Item Inbound Shipment</NavDropdown.Item>
                <NavDropdown.Item>Import Shipment Report</NavDropdown.Item>
          </NavDropdown>

        {/* Purchase Reports with nested sub-menu */}
        <NavDropdown
          title="Purchase Reports"
          id="purchase-reports-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Item Closing As On Date Report</NavDropdown.Item>
          <NavDropdown.Item>Purchase Order Details</NavDropdown.Item>
                <NavDropdown.Item>Purchase Summary Report</NavDropdown.Item>
                <NavDropdown.Item>Daily Item Receipt Report</NavDropdown.Item>
                <NavDropdown.Item>Pending Purchase order for Receipt </NavDropdown.Item>
                <NavDropdown.Item>Pending Item Receipt For Billing</NavDropdown.Item>
                <NavDropdown.Item>Purchase Order Tracking Report</NavDropdown.Item>
                <NavDropdown.Item>Purchase Contract Details</NavDropdown.Item>
        </NavDropdown>

         {/* Payable with nested sub-menu */}
         <NavDropdown
          title="Payable"
          id="payable-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Vendor Bills</NavDropdown.Item>
                <NavDropdown.Item>Pay Bills</NavDropdown.Item>
                <NavDropdown.Item>Vendor Credit</NavDropdown.Item>
                <NavDropdown.Item>Recurring Vendor Bill</NavDropdown.Item>
        </NavDropdown>

         {/* Payable Reports with nested sub-menu */}
         <NavDropdown
          title="Payable Reports"
          id="payable-reports-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Vendor Bills</NavDropdown.Item>
          <NavDropdown.Item>Daily Purchase Report</NavDropdown.Item>
                <NavDropdown.Item>Vendor Closing Report</NavDropdown.Item>
                <NavDropdown.Item>Vendors Ledger</NavDropdown.Item>
                <NavDropdown.Item>Vendor Payable Summary Report</NavDropdown.Item>
                <NavDropdown.Item>Vendor Aging Summary  Report</NavDropdown.Item>
                <NavDropdown.Item>Vendor Aging</NavDropdown.Item>
                <NavDropdown.Item>Vendor Details Ledger Report</NavDropdown.Item>
                <NavDropdown.Item>Vendor Credit Report</NavDropdown.Item>
                <NavDropdown.Item>Vendor Forecasting Report</NavDropdown.Item>
                <NavDropdown.Item>Commission Summary Report</NavDropdown.Item>
                <NavDropdown.Item>Outward Post Dated Cheque</NavDropdown.Item>
                <NavDropdown.Item>Unbuild Payable Closing Balance</NavDropdown.Item>
                <NavDropdown.Item>Unbuild Payable Ledger</NavDropdown.Item>
        </NavDropdown>
      </NavDropdown>
 
     {/* Sales Module Navbar */}
     <NavDropdown title="Sales Module" id="main-nav-dropdown">
        
        {/* Customer Define with nested sub-menu */}
        <NavDropdown title="Customer Define" id="ustomer-define-nav-dropdown" drop="right" className="multi-level-dropdown">
                <NavDropdown.Item>Vendors</NavDropdown.Item>
        </NavDropdown>
        
       {/* Sales with nested sub-menu */}
       <NavDropdown
          title="Sales"
          id="sales-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
         <NavDropdown.Item>Quotation</NavDropdown.Item>
                <NavDropdown.Item>Sales Order</NavDropdown.Item>
                <NavDropdown.Item>Pending Delivery Challan</NavDropdown.Item>
                <NavDropdown.Item>Delivery Challan</NavDropdown.Item>
                <NavDropdown.Item>Generate Consolidate Invoice</NavDropdown.Item>
                <NavDropdown.Item>Point of Sale</NavDropdown.Item>
        </NavDropdown>

        {/* Receivable with nested sub-menu */}
        <NavDropdown
          title="Receivable"
          id="receivable-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Purchase Order</NavDropdown.Item>
          <NavDropdown.Item>Invoice</NavDropdown.Item>
                <NavDropdown.Item>Recurring Invoice</NavDropdown.Item>
                <NavDropdown.Item>Customer Payment</NavDropdown.Item>
                <NavDropdown.Item>Credit Memo</NavDropdown.Item>
                <NavDropdown.Item>WHT Certificate Receive</NavDropdown.Item>
                <NavDropdown.Item>Invoice Matching</NavDropdown.Item>
        </NavDropdown>

        {/*  Export with nested sub-menu */}
        <NavDropdown
          title="Export"
          id="export-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
         <NavDropdown.Item>Outbound Shipment</NavDropdown.Item>
                <NavDropdown.Item>Outbound Shipment Report</NavDropdown.Item>
          </NavDropdown>

        {/* Sales Report with nested sub-menu */}
        <NavDropdown
          title="Sales Report"
          id="sales-report-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
         <NavDropdown.Item>Sale Order Details</NavDropdown.Item>
                <NavDropdown.Item>Date Wise Sale Order Planning</NavDropdown.Item>
                <NavDropdown.Item>Item Wise Sale Order Planning</NavDropdown.Item>
                <NavDropdown.Item>Delivery Orders Details</NavDropdown.Item>
                <NavDropdown.Item>Pending Sale Order For Do</NavDropdown.Item>
                <NavDropdown.Item>Sales Target VS Actual</NavDropdown.Item>
                <NavDropdown.Item>Weekly Market Tour Plan</NavDropdown.Item>
                <NavDropdown.Item>Sale Order Tracking Report</NavDropdown.Item>
        </NavDropdown>

         {/* Receivable Reports with nested sub-menu */}
         <NavDropdown
          title="Receivable Reports"
          id="receivable-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Daily Sales Report</NavDropdown.Item>
                <NavDropdown.Item>Sales Summary Report</NavDropdown.Item>
                <NavDropdown.Item>Customer Closing Report</NavDropdown.Item>
                <NavDropdown.Item>Customer Receiving Summary Report</NavDropdown.Item>
                <NavDropdown.Item>Credit Memo Report</NavDropdown.Item>
                <NavDropdown.Item>Customer Ledger Report - Foreign Currency</NavDropdown.Item>
                <NavDropdown.Item>Customer Aging</NavDropdown.Item>
                <NavDropdown.Item>Customer Aging Summary</NavDropdown.Item>
                <NavDropdown.Item>Customer Details Ledger Report</NavDropdown.Item>
                <NavDropdown.Item>Customer Forecasting Report</NavDropdown.Item>
                <NavDropdown.Item>Inward Post Dated Cheque</NavDropdown.Item>
                <NavDropdown.Item>WHT Certificate Receive</NavDropdown.Item>
        </NavDropdown>
      </NavDropdown>
      
     {/* Manufacturing Module Navbar */}
     <NavDropdown title="Manufacturing Module" id="main-nav-dropdown">
        
        {/* Manufacturing Setup with nested sub-menu */}
        <NavDropdown title="Manufacturing Setup" id="manufacturing-setup-nav-dropdown" drop="right" className="multi-level-dropdown">
        <NavDropdown.Item>Manufacturing Routing</NavDropdown.Item>
                <NavDropdown.Item>Work Centers / Entity Group</NavDropdown.Item>
                <NavDropdown.Item>Machine Setup</NavDropdown.Item>
                <NavDropdown.Item>Bill Of Materials</NavDropdown.Item>
        </NavDropdown>
        
       {/*  Discrete Manufacturing with nested sub-menu */}
       <NavDropdown
          title="Discrete Manufacturing"
          id="discrete-manufacturing-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
         <NavDropdown.Item>Pending SO for Discrete Work Order</NavDropdown.Item>
                <NavDropdown.Item>Discrete Work Order</NavDropdown.Item>
                <NavDropdown.Item>Pending Work Orders</NavDropdown.Item>
                <NavDropdown.Item>Assembly Build</NavDropdown.Item>
                <NavDropdown.Item>Assembly Unbuild</NavDropdown.Item>
                <NavDropdown.Item>Employee Piece Rate</NavDropdown.Item>
        </NavDropdown>

        {/* Process Manufacturing with nested sub-menu */}
        <NavDropdown
          title="Process Manufacturing"
          id="process-manufacturing-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Pending SO for Process Work order</NavDropdown.Item>
                <NavDropdown.Item>Work Order</NavDropdown.Item>
                <NavDropdown.Item>Pending Work Progress</NavDropdown.Item>
                <NavDropdown.Item>Work Progress</NavDropdown.Item>
                <NavDropdown.Item>Pending Material Consumption</NavDropdown.Item>
                <NavDropdown.Item>Material Consumption</NavDropdown.Item>
        </NavDropdown>

        {/* Manufacturing Reports with nested sub-menu */}
        <NavDropdown
          title="Manufacturing Reports"
          id="manufacturing-reports-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
         <NavDropdown.Item>Work Order Status Report</NavDropdown.Item>
                <NavDropdown.Item>Assembly Builds Report</NavDropdown.Item>
                <NavDropdown.Item>Material Planning Sale Order Wise</NavDropdown.Item>
                <NavDropdown.Item>Material Planning Work Order Wise</NavDropdown.Item>
                <NavDropdown.Item>Assembly Build Piece Rate</NavDropdown.Item>
                <NavDropdown.Item>Work Progress Piece Rate</NavDropdown.Item>
                <NavDropdown.Item>Actual vs Plan Consumption Summary</NavDropdown.Item>
                <NavDropdown.Item>Daily Actual vs Plan Consumption Report</NavDropdown.Item>
                <NavDropdown.Item>Down Time Report</NavDropdown.Item>
                <NavDropdown.Item>Daily Production Route Wise</NavDropdown.Item>
                <NavDropdown.Item>Route Production Summary</NavDropdown.Item>
          </NavDropdown>
      </NavDropdown>

      
      {/* Hr & Payroll Module Navbar */}
     <NavDropdown title="Hr & Payroll" id="main-nav-dropdown" className='hr-payroll'>
        
        {/* HR Setup with nested sub-menu */}
        <NavDropdown title="HR Setup" id="hr-setup-nav-dropdown" drop="right" className="multi-level-dropdown">
        <NavDropdown.Item>Employees</NavDropdown.Item>
                <NavDropdown.Item>Employees Types</NavDropdown.Item>
                <NavDropdown.Item>Employees Grades</NavDropdown.Item>
                <NavDropdown.Item>Employee Pay Elements</NavDropdown.Item>
                <NavDropdown.Item>Employee Jobs</NavDropdown.Item>
                <NavDropdown.Item>Employee Performance Criteria</NavDropdown.Item>
                <NavDropdown.Item>Employee Performance Evaluation</NavDropdown.Item>
                <NavDropdown.Item>Employee Designation</NavDropdown.Item>
                <NavDropdown.Item>Define Employee Salary</NavDropdown.Item>
        </NavDropdown>
        
       {/*  Hr Attendance with nested sub-menu */}
       <NavDropdown
          title="Hr Attendance"
          id="hr-attendance-nav-dropdown"
          drop="left"
          className="multi-level-dropdown"
        >
         <NavDropdown.Item>Time Attendance Machine Data</NavDropdown.Item>
                <NavDropdown.Item>Time Attendance Register</NavDropdown.Item>
                <NavDropdown.Item>Employee Leave Application</NavDropdown.Item>
                <NavDropdown.Item>Accrual Plan Balances</NavDropdown.Item>
                <NavDropdown.Item>HR & PayRoll Dashboard</NavDropdown.Item>
                <NavDropdown.Item>Overtime Approval</NavDropdown.Item>
        </NavDropdown>

        {/* Payroll Setup with nested sub-menu */}
        <NavDropdown
          title="Payroll Setup"
          id="payroll-setup-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Payroll Process Run</NavDropdown.Item>
                <NavDropdown.Item>Salary Payable Process</NavDropdown.Item>
                <NavDropdown.Item>Salary Payment Process</NavDropdown.Item>
                <NavDropdown.Item>Payroll Process Run Results</NavDropdown.Item>
                <NavDropdown.Item>Employee Expense Claim</NavDropdown.Item>
        </NavDropdown>

        {/* Employee Reports with nested sub-menu */}
        <NavDropdown
          title="Employee Reports"
          id="employee-reports-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
         <NavDropdown.Item>Employees Ledger</NavDropdown.Item>
                <NavDropdown.Item>Employees Closing Report</NavDropdown.Item>
                <NavDropdown.Item>Employees Salary Sheet</NavDropdown.Item>
                <NavDropdown.Item>Employees Advances Report</NavDropdown.Item>
                <NavDropdown.Item>Employee Loan Summary</NavDropdown.Item>
                <NavDropdown.Item>Employee Card</NavDropdown.Item>
                <NavDropdown.Item>Salary Slip</NavDropdown.Item>
                <NavDropdown.Item>Time Attendance Summary</NavDropdown.Item>
                <NavDropdown.Item>Employee Attendance Register</NavDropdown.Item>
                <NavDropdown.Item>Provident Contribution Report</NavDropdown.Item>
                <NavDropdown.Item>Uploaded Documents Status</NavDropdown.Item>
          </NavDropdown>

          {/* Payroll Setup with nested sub-menu */}
        <NavDropdown
          title="Payroll Setup"
          id="payroll-setup-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
          <NavDropdown.Item>Payroll Process Run</NavDropdown.Item>
                <NavDropdown.Item>Salary Payable Process</NavDropdown.Item>
                <NavDropdown.Item>Salary Payment Process</NavDropdown.Item>
                <NavDropdown.Item>Payroll Process Run Results</NavDropdown.Item>
                <NavDropdown.Item>Employee Expense Claim</NavDropdown.Item>
        </NavDropdown>

        {/* Employee Reports with nested sub-menu */}
        <NavDropdown
          title="Employee Reports"
          id="employee-reports-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
         <NavDropdown.Item>Employees Ledger</NavDropdown.Item>
                <NavDropdown.Item>Employees Closing Report</NavDropdown.Item>
                <NavDropdown.Item>Employees Salary Sheet</NavDropdown.Item>
                <NavDropdown.Item>Employees Advances Report</NavDropdown.Item>
                <NavDropdown.Item>Employee Loan Summary</NavDropdown.Item>
                <NavDropdown.Item>Employee Card</NavDropdown.Item>
                <NavDropdown.Item>Salary Slip</NavDropdown.Item>
                <NavDropdown.Item>Time Attendance Summary</NavDropdown.Item>
                <NavDropdown.Item>Employee Attendance Register</NavDropdown.Item>
                <NavDropdown.Item>Provident Contribution Report</NavDropdown.Item>
                <NavDropdown.Item>Uploaded Documents Status</NavDropdown.Item>
          </NavDropdown>
      </NavDropdown>

     {/* Last dropdown Navbar */}
     <NavDropdown title="" id="main-nav-dropdown" >
        
        {/* Project Management with nested sub-menu */}
        <NavDropdown title="Project Management" id="hr-setup-nav-dropdown" drop="right" className="multi-level-dropdown">
        <NavDropdown.Item>Project Management</NavDropdown.Item>
                <NavDropdown.Item>CRM</NavDropdown.Item>
                <NavDropdown.Item>Projects</NavDropdown.Item>
                <NavDropdown.Item>Projects Transaction Reports</NavDropdown.Item>
        </NavDropdown>
        
       {/*  Reports with nested sub-menu */}
       <NavDropdown
          title="Reports"
          id="reports-nav-dropdown"
          drop="right"
          className="multi-level-dropdown"
        >
         <NavDropdown.Item>Reports</NavDropdown.Item>
                <NavDropdown.Item>Financial Reports</NavDropdown.Item>
                <NavDropdown.Item>Sales Report</NavDropdown.Item>
                <NavDropdown.Item>Receivable Reports</NavDropdown.Item>
                <NavDropdown.Item>Purchase Reports</NavDropdown.Item>
                <NavDropdown.Item>Payable Reports</NavDropdown.Item>
                <NavDropdown.Item>Items Reports</NavDropdown.Item>
                <NavDropdown.Item>Project Transactions Reports</NavDropdown.Item>
                <NavDropdown.Item>Manufacturing Reports</NavDropdown.Item>
                <NavDropdown.Item>Employee Reports</NavDropdown.Item>
                <NavDropdown.Item>Gate Pass Reports</NavDropdown.Item>
                <NavDropdown.Item>Tax Report</NavDropdown.Item>
                <NavDropdown.Item>Application Setup Report</NavDropdown.Item>
        </NavDropdown>

        
      </NavDropdown>


    </Nav>
    
  </Navbar>
  )
}

export default Dashboard