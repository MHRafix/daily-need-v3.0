import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiBookOpen, FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Action({ isShow, id, handleDelete }) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="action_three-dots ">
        <button
          id="action_btn"
          onClick={() => setVisible(visible ? false : true)}
        >
          <BsThreeDotsVertical size={20} />
        </button>
        {visible && (
          <div id={isShow ? "action_plate_three" : "action_plate_two"}>
            <button id="action_btn_icon">
              <FiEdit className="text-light_purple cursor-pointer text-normal outline-none" />
              &nbsp;Update
            </button>
            <button
              id="action_btn_icon"
              onClick={() => {
                handleDelete(
                  `admin_pannel_api/manage_users/delete_user/62d7ed726913aee3ba3970c0`
                );
              }}
            >
              <RiDeleteBinLine className="text-red-500 cursor-pointer text-normal outline-none" />
              &nbsp;Delete
            </button>
            {isShow && (
              <button id="action_btn_icon">
                <FiBookOpen className="text-green cursor-pointer text-normal outline-none" />
                &nbsp;Details
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
