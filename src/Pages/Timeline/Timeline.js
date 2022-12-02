import React from "react";
import { Link, Outlet } from "react-router-dom";
import Post from "../../Components/Post/Post";
import CreatePost from "./CreatePost";

import "./Timeline.css";

const Timeline = () => {
  return (
    <div className=" mx-5 py-20">
      <div class="grid grid-cols-6 gap-4">
        {/* side menu bar start------------------------------- */}
        <div class="bg-neutral rounded-lg  h-screen">
          <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side ">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 w-56 text-base-content ">
                {/* <!-- Sidebar content here --> */}
                <li>
                  <Link to="/">Feed</Link>
                </li>
                <li>
                  <Link to="/community">My community</Link>
                </li>
                <li>
                  <Link to="/messages">Messages</Link>
                </li>
                <li>
                  <Link to="/notification">Notification</Link>
                </li>
                <li>
                  <Link to="/explore">Explore</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <Link to="">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* side menu bar END------------------------------- */}

       <div className="col-span-5">
       <Outlet></Outlet>
       </div>
      </div>
     
    </div>
  );
};

export default Timeline;
