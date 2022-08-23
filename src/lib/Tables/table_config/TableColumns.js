import Image from "next/image";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Action from "../../../utilities/Action";

// table row sorter here
const caseInsensitiveSort = (rowA, rowB) => {
  const a = rowA.user_name.toLowerCase();
  const b = rowB.user_name.toLowerCase();

  if (a > b) {
    return 1;
  }

  if (b > a) {
    return -1;
  }

  return 0;
};

// product sort
const productSort = (rowA, rowB) => {
  const a = rowA.title.toLowerCase();
  const b = rowB.title.toLowerCase();

  if (a > b) {
    return 1;
  }

  if (b > a) {
    return -1;
  }

  return 0;
};

// user table config and columns here
export const UserTableConfig = (handleDelete) => {
  const UserTableColumns = [
    {
      name: "User Name",
      selector: (row) => row.user_name,
      sortable: true,
      sortFunction: caseInsensitiveSort,
    },

    {
      name: "Profile Pic",
      selector: (row) => (
        <div style={{ padding: "5px" }}>
          <Image
            src={row.user_pic}
            alt="user pic"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      ),
    },
    {
      name: "User Email",
      selector: (row) => row.user_email,
      sortable: true,
      sortFunction: caseInsensitiveSort,
    },
    {
      name: "User Role",
      selector: (row) =>
        row.user_admin ? (
          <span
            className="flex items-center justify-between"
            id="green_signal_status"
          >
            Admin <MdOutlineAdminPanelSettings size={15} />
          </span>
        ) : (
          <span
            className="flex items-center justify-between"
            id="warning_signal_status"
          >
            Customer <BiUserCircle size={15} />
          </span>
        ),
    },

    {
      name: "Action",
      selector: (row) => (
        <Action
          isShow={false}
          api_url={`admin_pannel_api/manage_users/delete_user/${row._id}`}
          handleDelete={handleDelete}
        />
      ),
    },
  ];

  return { UserTableColumns };
};

// products table config and columns here
export const ProductTableConfig = (handleDelete) => {
  const ProductTableColumns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      sortFunction: productSort,
    },

    {
      // name: "Image",
      selector: (row) => (
        <div style={{ padding: "5px" }}>
          <Image
            src={row.thumbnail}
            alt="product pic"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      ),
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
      sortFunction: productSort,
    },
    {
      name: "Reg Price",
      selector: (row) => <span>৳ {row.prices.regular_price}</span>,
      sortable: true,
      sortFunction: productSort,
    },
    {
      name: "Sale Price",
      selector: (row) => <span>৳ {row.prices.sale_price}</span>,
      sortable: true,
      sortFunction: productSort,
    },
    {
      name: "Available",
      selector: (row) =>
        row.stock_available > 0 ? (
          <span id="green_signal_status">{row.stock_available} kg</span>
        ) : (
          <span id="green_signal_status">✖</span>
        ),
      sortable: true,
      sortFunction: productSort,
    },
    {
      name: "Status",
      selector: (row) =>
        row.product_status === "in-stock" ? (
          <span id="green_signal_status">{row.product_status}</span>
        ) : (
          <span id="red_signal_status">{row.product_status}</span>
        ),
      sortable: true,
      sortFunction: productSort,
    },
    {
      name: "Type",
      selector: (row) =>
        row.product_type === "on-sale" ? (
          <span id="info_signal_status">{row.product_type}</span>
        ) : (
          <span id="warning_signal_status">{row.product_type}</span>
        ),
      sortable: true,
      sortFunction: productSort,
    },
    // {
    //   name: "Action",
    //   selector: (row) => row._id,
    //   sortable: true,
    //   sortFunction: caseInsensitiveSort,
    // },
    // {
    //   name: "User Role",
    //   selector: (row) =>
    //     row.user_admin ? (
    //       <span
    //         className="flex items-center justify-between"
    //         id="green_signal_status"
    //       >
    //         Admin <MdOutlineAdminPanelSettings size={15} />
    //       </span>
    //     ) : (
    //       <span
    //         className="flex items-center justify-between"
    //         id="warning_signal_status"
    //       >
    //         Customer <BiUserCircle size={15} />
    //       </span>
    //     ),
    // },

    {
      name: "Action",
      selector: (row) => (
        <Action
          isShow={false}
          api_url={`admin_pannel_api/manage_products/delete_product/${row._id}`}
          handleDelete={handleDelete}
        />
      ),
    },
  ];

  return { ProductTableColumns };
};
