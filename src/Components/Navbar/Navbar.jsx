import React from "react";
import { Link} from "react-router-dom";
import NavNotification from "./NavNotification/NavNotification";



const Navbar = () => {
  return (
    <div className="navbar z-50 bg-base-100 fixed top-0 ">
      <div className="flex-1">
        <Link to="" className="btn btn-ghost normal-case text-secondary font-bold text-3xl">MeetoApp</Link>
        <div className="form-control">
     
            
              <input
                type="search"
                placeholder="Search…"
                className="input caret-primary lg:ml-20 rounded-md ease-in-out max-w-80 lg:focus:w-96 focus:outline-none transition duration-700 input-bordered"
              />
    
        </div>
      </div>
      <NavNotification/>
      <div className="flex-none gap-2">
       
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt=""/>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
