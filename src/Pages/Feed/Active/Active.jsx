import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import "./Active.css";

const Active = () => {
  return (
    <div>
      <div className="flex justify-between  items-center p-2">
        <h3 className="text-primary font-bold ">Friends</h3>

        {/* =================more option start============= */}
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="">
            <FiMoreHorizontal className="text-2xl mx-2" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content  p-2 font-bold shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Turn on active status
              </button>
            </li>
          </ul>
        </div>
        {/* =================more option end============= */}
      </div>

      {/* active user start--------------------------- */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
        <div className="avatar">
            <div className="w-7 rounded-full m-3">
              <img
                src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>

          <h3 className="text-primary font-bold text-sm">Radovan Alic</h3>
        </div>
        <div className="text-xs text-primary px-2 font-semibold opacity-50">
          8 min
        </div>
      </div>

      {/* ============================== */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center ">
          <div className="avatar">
            <div className="w-7 rounded-full m-3">
              <img
                src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>

          <p className="text-primary  font-bold text-sm">Shadhin</p>
        </div>
        <div className="w-2 h-2 rounded-full bg-green-500 mx-2 "></div>
      </div>
      {/* active user start--------------------------- */}
    </div>
  );
};

export default Active;
