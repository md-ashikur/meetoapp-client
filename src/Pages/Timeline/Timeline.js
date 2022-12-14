import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Active from "../Feed/Active/Active";
import { CgFeed, CgProfile } from "react-icons/cg";
import "./Timeline.css";
import { RiMessage3Line } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { GiEarthAmerica } from "react-icons/gi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

const Timeline = () => {
  return (
    <div className=" lg:mx-3 lg:pt-20">
      <div class="grid lg:grid-cols-12 lg:gap-3">
        {/* side menu bar start------------------------------- */}
        <div class=" rounded-lg hidden lg:block h-screen lg:col-span-2 lg:sticky top-20">
          <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side ">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 max-w-56 text-base-content ">
                {/* <!-- Sidebar content here --> */}
                <li>
                  <NavLink to="/"><CgFeed/> Feed</NavLink>
                </li>
                <li>
                  <NavLink to="/community"><MdOutlinePeopleAlt/> My community</NavLink>
                </li>
                <li>
                  <NavLink to="/messages"><RiMessage3Line/> Messages</NavLink>
                </li>
                <li>
                  <NavLink to="/notification"><IoNotifications className="" />Notification</NavLink>
                </li>
                <li>
                  <NavLink to="/explore"><GiEarthAmerica/> Explore</NavLink>
                </li>
                <li>
                  <NavLink to="/profile"><CgProfile/> Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/settings"><AiOutlineSetting/> Settings</NavLink>
                </li>
                <li>
                  <NavLink to="/logout"><TbLogout/> Logout</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* side menu bar END------------------------------- */}

       <div className="lg:col-span-10">
       <Outlet></Outlet>
       </div>
       
      </div>
     
    </div>
  );
};

export default Timeline;
