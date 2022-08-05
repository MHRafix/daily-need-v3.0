import Cookie from "js-cookie";
import Image from "next/image";
import React from "react";
import Logo from "../../images/logo/logo_black.webp";
import ReactPaginationTable from "../React_Table/PaginationTable/ReactPaginationTable";
import { PRODUCTS_TABLE_COLUMNS } from "../React_Table/TableColumns";

export default function InvoiceHistory({ modal_data }) {
  console.log(modal_data);
  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  return (
    <div className="invoice_wrapper">
      <div className="download_btns">
        <button id="cart_btn">Print Invoice</button>
        <button id="cart_btn">Download Invoice</button>
      </div>

      <div className="invoice_document_area">
        <div className="customer_document flex justify-between">
          <div className="brand_wrapper">
            <Image src={Logo} alt="site logo" width={127} height={38} />
          </div>
          <div className="customers_info text-left text-black2 text-normal">
            <div>Name: {userInfo?.user_name}</div>
            <div>Email: {userInfo?.user_email}</div>
            <div>Mobile: {modal_data?.customers_info?.customers_mobile}</div>
            <div>Total Itmes: {modal_data?.products_data.length}</div>
            <div>Net Bill: ৳ {modal_data?.order_overview?.total_amount}</div>
            <div>Order Date: ৳ {modal_data?.createdAt}</div>
            <div>Payment Type: {modal_data?.payment_info?.payment_method}</div>
            <div>Payment Date: {modal_data?.updatedAt}</div>
          </div>
        </div>
        <div className="ordered_products_table">
          <ReactPaginationTable
            PRODUCTS_DATA={modal_data?.products_data}
            PRODUCTS_TABLE_COLUMNS={PRODUCTS_TABLE_COLUMNS}
          />
        </div>
      </div>
    </div>
  );
}
