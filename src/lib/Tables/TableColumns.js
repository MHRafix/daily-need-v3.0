import Image from "next/image";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Action from "../../utilities/Action";

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
        <Action isShow={false} id={row._id} handleDelete={handleDelete} />
      ),
    },
  ];

  return { UserTableColumns };
};
