// user data sortere here
export const UserSorter = ({ dependency }) => {
  const { handleFiltering, handleUserFilter, handleResetFilter, active } =
    dependency;

  return (
    <div id="table_sorter_wrapper">
      <div id="sorter_input_wrapper">
        <input
          type="search"
          placeholder="Name filter..."
          className="sorting_input lg:!w-80 xs:w-full"
          onChange={handleFiltering}
        />
      </div>

      <div id="table_data_filter_wrapper">
        <div
          id={active === "reset" ? "filter_btn_active" : "filter_btn"}
          onClick={() => handleResetFilter("reset")}
        >
          <button>All Users</button>
        </div>
        <div
          id={active === "customer" ? "filter_btn_active" : "filter_btn"}
          onClick={() => handleUserFilter(false, "customer")}
        >
          <button>Customers</button>
        </div>
        <div
          id={active === "admin" ? "filter_btn_active" : "filter_btn"}
          onClick={() => handleUserFilter(true, "admin")}
        >
          <button>Admins</button>
        </div>
        <div
          id={active === "moderator" ? "filter_btn_active" : "filter_btn"}
          onClick={() => handleUserFilter("moderator", "moderator")}
        >
          <button>Moderators</button>
        </div>
        <div
          id={active === "vendor" ? "filter_btn_active" : "filter_btn"}
          onClick={() => handleUserFilter("vendor", "vendor")}
        >
          <button>Vendor</button>
        </div>
      </div>
    </div>
  );
};
