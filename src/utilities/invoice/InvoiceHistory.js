import Cookie from "js-cookie";
import Image from "next/image";
import React from "react";
import Logo from "../../images/logo/logo_black.webp";
import OrderedProductsTable from "../React_Table/PaginationTable/OrderedProductsTable";
import { ORDERED_PRODUCTS_TABLE_COLUMNS } from "../React_Table/TableColumns";

export default function InvoiceHistory({ modal_data }) {
  console.log(modal_data);
  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  return (
    <div className="invoice_wrapper">
      <div className="download_btns">
        <button id="cart_btn" className="!text-normal">
          Print Invoice
        </button>
      </div>

      <div className="invoice_document_area">
        <div className="customer_document flex justify-between">
          <div className="brand_wrapper">
            <Image src={Logo} alt="site logo" width={127} height={38} />
          </div>
          <div className="customers_info mb-5 text-left text-black2 text-normal">
            <div className="my-7">
              {userInfo?.user_pic && (
                <Image
                  src={userInfo?.user_pic}
                  alt="profile pic"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              )}
            </div>
            <div className="my-4 tracking-wider">
              Name : &nbsp;&nbsp; {userInfo?.user_name}
            </div>
            <div className="my-4 tracking-wider">
              Email : &nbsp;&nbsp; {userInfo?.user_email}
            </div>
            <div className="my-4 tracking-wider">
              Mobile : &nbsp;&nbsp;
              {modal_data?.customer_info?.customer_mobile}
            </div>
            <div className="my-4 tracking-wider">
              Total Itmes : &nbsp;&nbsp; {modal_data?.products_data.length}
            </div>
            <div className="my-4 tracking-wider">
              Net Bill : &nbsp;&nbsp; ৳
              {modal_data?.order_overview?.total_amount}
            </div>
            <div className="my-4 tracking-wider">
              Order Date : &nbsp;&nbsp; ৳ {modal_data?.createdAt}
            </div>
            <div className="my-4 tracking-wider">
              Payment Type : &nbsp;&nbsp;
              {modal_data?.payment_info?.payment_method}
            </div>
            <div className="my-4 tracking-wider">
              Payment Date : &nbsp;&nbsp; {modal_data?.updatedAt}
            </div>
          </div>
        </div>
        <div className="ordered_products_table">
          <OrderedProductsTable
            PRODUCTS_DATA={modal_data?.products_data}
            PRODUCTS_TABLE_COLUMNS={ORDERED_PRODUCTS_TABLE_COLUMNS}
          />
        </div>
      </div>
    </div>
  );
}
