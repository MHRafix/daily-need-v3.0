import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiBookOpen, FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Action() {
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
          <div id="action_plate">
            <button>
              <div id="action_btn_icon">
                <FiEdit className="text-light_purple cursor-pointer text-normal outline-none" />
                &nbsp;&nbsp;Update
              </div>
            </button>
            <button>
              <div id="action_btn_icon">
                <RiDeleteBinLine className="text-red-500 cursor-pointer text-normal outline-none" />
                &nbsp;&nbsp;Delete
              </div>
            </button>
            <button>
              <div id="action_btn_icon">
                <FiBookOpen className="text-green cursor-pointer text-normal outline-none" />
                Details
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
