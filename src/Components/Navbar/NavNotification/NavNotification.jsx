import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { MdModeComment } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Notification from "../../../Pages/Notification/Notification";

const NavNotification = () => {
  return (
    <div className="dropdown dropdown-bottom mx-2 dropdown-end">
      <label tabIndex={0} className="m-0">
        <IoNotifications className="text-2xl p-2 w-10 h-10 bg-accent rounded-full" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 font-bold shadow bg-base-100 rounded-box overflow-auto lg:w-96 w-80 max-h-96"
      >
        <li className="">
        
         
          <h3 className="text-primary font-bold px-2">Notification</h3>

           {/* comment on post===(UNSEEN)========== */}
          <div className="bg-base-100 rounded-lg mb-2 p-0">
            <div className="flex justify-between items-center lg:px-3 ">
              <div className="flex items-center ">
                <MdModeComment className="text-[#38cb89] p-2 bg-[#d7f5e7] text-3xl rounded-full" />
                <div className="avatar">
                  <div className="w-10 rounded-full m-3">
                    <img
                      src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-primary font-semibold text-sm">
                    <span className="font-bold">Arafat khan</span> comment on
                    your photo.
                  </h3>
                  <p className="text-primary opacity-50 text-xs font-semibold my-0">
                    5 minutes ago
                  </p>
                </div>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 mx-2 "></div>
            </div>
          </div>
           {/* comment on post end===(UNSEEN)========== */}


           
        {/* like on post======(SEEN)======= */}
        <div className="bg-base-100 rounded-lg mb-2 p-0">
          <div className="flex justify-between items-center px-3 ">
            <div className="flex items-center ">
              <AiTwotoneHeart className="text-red-500 p-2 bg-red-100 text-3xl rounded-full" />
              <div className="avatar">
                <div className="w-10 rounded-full m-3">
                  <img
                    src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="opacity-50">
                <h3 className="text-primary font-semibold text-sm">
                  <span className="font-bold">Harun</span> like your post "Ki
                  ase jibone...".
                </h3>
                <p className="text-primary opacity-50 text-xs font-semibold my-0">
                  2 hours ago
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* like on post ends============= */}
        {/* like on post======(SEEN)======= */}
        <div className="bg-base-100 rounded-lg mb-2 p-0">
          <div className="flex justify-between items-center px-3 ">
            <div className="flex items-center ">
              <AiTwotoneHeart className="text-red-500 p-2 bg-red-100 text-3xl rounded-full" />
              <div className="avatar">
                <div className="w-10 rounded-full m-3">
                  <img
                    src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="opacity-50">
                <h3 className="text-primary font-semibold text-sm">
                  <span className="font-bold">Harun</span> like your post "Ki
                  ase jibone...".
                </h3>
                <p className="text-primary opacity-50 text-xs font-semibold my-0">
                  2 hours ago
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* like on post ends============= */}
        {/* like on post======(SEEN)======= */}
        <div className="bg-base-100 rounded-lg mb-2 p-0">
          <div className="flex justify-between items-center px-3 ">
            <div className="flex items-center ">
              <AiTwotoneHeart className="text-red-500 p-2 bg-red-100 text-3xl rounded-full" />
              <div className="avatar">
                <div className="w-10 rounded-full m-3">
                  <img
                    src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="opacity-50">
                <h3 className="text-primary font-semibold text-sm">
                  <span className="font-bold">Harun</span> like your post "Ki
                  ase jibone...".
                </h3>
                <p className="text-primary opacity-50 text-xs font-semibold my-0">
                  2 hours ago
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* like on post ends============= */}

        <div><Link to="/notification">See All</Link></div>
        </li>
      </ul>
    </div>
  );
};

export default NavNotification;
