import Image from "next/image";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { month_name } from "../../../fake_data/all_fakedata";
import Action from "../../../utilities/Action";

// table row sorter here
const userSort = (rowA, rowB) => {
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

// product sort
const orderSort = (rowA, rowB) => {
  const a = rowA.order_overview.order_status.toLowerCase();
  const b = rowB.order_overview.order_status.toLowerCase();

  if (a > b) {
    return 1;
  }

  if (b > a) {
    return -1;
  }

  return 0;
};

// product sort
const catSort = (rowA, rowB) => {
  const a = rowA.cat_name.toLowerCase();
  const b = rowB.cat_name.toLowerCase();

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
      selector: (row) => (
        <div className="capitalize block">{row.user_name}</div>
      ),
      sortable: true,
      sortFunction: userSort,
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
      sortFunction: userSort,
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
      selector: (row) => <div className="capitalize">{row.title}</div>,
      sortable: true,
      sortFunction: productSort,
    },

    {
      name: "Image",
      selector: (row) => (
        <div style={{ padding: "5px" }}>
          {row.thumbnail.src ? (
            <Image
              src={row.thumbnail}
              alt="product pic"
              className="rounded-full"
            />
          ) : (
            <Image
              src={row.thumbnail}
              alt="product pic"
              width={50}
              height={50}
              className="rounded-full"
            />
          )}
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

// category table config and columns here
export const CategoryTableConfig = (
  handleDelete,
  all_products,
  handleModal
) => {
  // handle quantity of category products
  const handleCategoryQty = (category) => {
    const category_products = all_products?.filter(
      (product) => product.category === category
    );
    return <div>{category_products.length}</div>;
  };

  const CategoryTableColumns = [
    {
      name: "Category Name",
      selector: (row) => <div className="!capitalize">{row.cat_name}</div>,
      sortable: true,
      sortFunction: catSort,
    },

    {
      name: "Category Image",
      selector: (row) => (
        <div style={{ padding: "5px" }}>
          <Image
            src={row.cat_image}
            alt="product pic"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      ),
    },
    {
      name: "Products Quantity",
      selector: (row) => handleCategoryQty(row.cat_name),
    },

    {
      name: "Action",
      selector: (row) => (
        <Action
          // isShow={true}
          api_url={`admin_pannel_api/manage_products/delete_product/${row._id}`}
          handleDelete={handleDelete}
          handleModal={handleModal}
          keyProperties={row.cat_name}
        />
      ),
    },
  ];

  return { CategoryTableColumns };
};

// category table config and columns here
export const OrderedTableConfig = (handleDelete, handleModal) => {
  const orderStatus = (cell) => {
    if (cell === "canceled") {
      return <span id="red_signal_status">canceled</span>;
    } else if (cell === "shipped") {
      return <span id="green_signal_status">shipped</span>;
    } else if (cell === "pendding") {
      return <span id="warning_signal_status">pendding</span>;
    } else if (cell === "inprogress") {
      return <span id="info_signal_status">inprogress</span>;
    }
  };

  const OrderedTableColumns = [
    {
      name: "CM Name",
      selector: (row) => (
        <div className="!capitalize">{row.customer_info.customer_name}</div>
      ),
      sortable: true,
      sortFunction: orderSort,
    },
    {
      name: "CM Mobile",
      selector: (row) => (
        <div className="!capitalize">{row.customer_info.customer_mobile}</div>
      ),
      sortable: true,
      sortFunction: orderSort,
    },
    {
      name: "Order Date",
      selector: (row) => (
        <div>
          {row.order_overview.order_date.date}{" "}
          {month_name[row.order_overview.order_date.month]}{" "}
          {row.order_overview.order_date.year}
        </div>
      ),
      sortable: true,
      sortFunction: orderSort,
    },
    {
      name: "Total Amount",
      selector: (row) => (
        <div className="!capitalize font-semibold">
          ৳ {row.order_overview.total_amount}
        </div>
      ),
      sortable: true,
      sortFunction: orderSort,
    },
    {
      name: "Payment Status",
      selector: (row) =>
        row.payment_info.payment_status === "due" ? (
          <span id="red_signal_status">{row.payment_info.payment_status}</span>
        ) : (
          <span id="green_signal_status">
            {row.payment_info.payment_status}
          </span>
        ),
      sortable: true,
      sortFunction: orderSort,
    },
    {
      name: "Status",
      selector: (row) => orderStatus(row.order_overview.order_status),
      sortable: true,
      sortFunction: orderSort,
    },

    {
      name: "Action",
      selector: (row) => (
        <Action
          api_url={`admin_pannel_api/manage_products/delete_product/${row._id}`}
          handleDelete={handleDelete}
          handleModal={handleModal}
          keyProperties={row.products_data}
        />
      ),
    },
  ];

  return { OrderedTableColumns };
};
