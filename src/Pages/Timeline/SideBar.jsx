import React from "react";
import { RiMessage3Line } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { GiEarthAmerica } from "react-icons/gi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { CgFeed, CgProfile } from "react-icons/cg";

const SideBar = () => {
  return (
    // mobile version==========================
    <div class="block lg:hidden pt-16 ">
      <div className="navbar-center bg-base-100">
        <div className="flex justify-center">
          <ul className="menu menu-horizontal py-1 px-0 text-3xl ">
            <li>
              <NavLink to="/">
                <CgFeed /> 
              </NavLink>
            </li>
            <li>
              <NavLink to="/community">
                <MdOutlinePeopleAlt /> 
              </NavLink>
            </li>
            <li>
              <NavLink to="/messages">
                <RiMessage3Line />
              </NavLink>
            </li>
            <li>
              <NavLink to="/notification">
                <IoNotifications className="" />
              
              </NavLink>
            </li>
            <li>
              <NavLink to="/explore">
                <GiEarthAmerica /> 
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <CgProfile /> 
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
