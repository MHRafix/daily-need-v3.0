import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Action({
  api_url,
  handleDelete,
  handleModal,
  keyProperties,
}) {
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
          <div id={keyProperties ? "action_plate_three" : "action_plate_two"}>
            <button id="action_btn_icon" onClick={() => setVisible(false)}>
              <FiEdit className="text-light_purple cursor-pointer text-normal outline-none" />
              &nbsp;Update
            </button>
            <button
              id="action_btn_icon"
              onClick={() => {
                handleDelete(api_url);
                setVisible(false);
              }}
            >
              <RiDeleteBinLine className="text-red-500 cursor-pointer text-normal outline-none" />
              &nbsp;Delete
            </button>
            {keyProperties && (
              <button
                id="action_btn_icon"
                onClick={() => {
                  handleModal(keyProperties);
                  setVisible(false);
                }}
              >
                <MdOutlinePlaylistAdd className="text-green cursor-pointer text-normal outline-none" />
                &nbsp;Details
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
