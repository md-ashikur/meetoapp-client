import React from "react";
import { IoNotifications } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavNotification = () => {
  return (
   
    
      
        <div className="dropdown dropdown-bottom mx-2 dropdown-end">
          <label tabIndex={0} className="m-0">
            <IoNotifications className="text-2xl p-2 w-10 h-10 bg-accent rounded-full" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 font-bold shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to=""></Link>
            </li>
            <div className="divider my-0 px-2"></div>
            <li>
              <Link to="" className=""></Link>
            </li>
          </ul>
        </div>
  
  
  );
};

export default NavNotification;
