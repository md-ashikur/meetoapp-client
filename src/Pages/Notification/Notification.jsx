import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoIosShareAlt } from "react-icons/io";
import { MdModeComment } from "react-icons/md";
import { RiUserFollowFill } from "react-icons/ri";
import Active from "../Feed/Active/Active";

const Notification = () => {
  return (
    <div className="grid grid-cols-10 gap-3">
      <div className="bg-neutral p-3 col-span-8 rounded-lg">
        <div className="flex bg-base-100 justify-between rounded-lg  items-center p-2">
          <h3 className="text-primary font-bold px-2">Notification</h3>

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
        <div className="divider"></div>

        {/* comment on post===(UNSEEN)========== */}
        <div className="bg-base-100 rounded-lg mb-2">
          <div className="flex justify-between items-center px-3 ">
            <div className="flex items-center ">
              <MdModeComment className="text-[#38cb89] p-2 bg-[#d7f5e7] text-3xl rounded-full" />
              <div className="w-10 rounded-full m-3 ">
                <img
                  className="rounded-full"
                  src="https://placeimg.com/80/80/people"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-primary font-semibold text-sm">
                  <span className="font-bold">Arafat khan</span> comment on your
                  photo.
                </h3>
                <p className="text-primary opacity-50 text-xs font-semibold my-0">
                  5 minutes ago
                </p>
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 mx-2 "></div>
          </div>
        </div>
        {/* comment on post ends============= */}

        {/* like on post======(SEEN)======= */}
        <div className="bg-base-100 rounded-lg mb-2">
          <div className="flex justify-between items-center px-3 ">
            <div className="flex items-center ">
              <AiTwotoneHeart className="text-red-500 p-2 bg-red-100 text-3xl rounded-full" />
              <div className="w-10 rounded-full m-3 ">
                <img
                  className="rounded-full"
                  src="https://placeimg.com/80/80/people"
                  alt=""
                />
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




        {/* share post======(UNSEEN)======= */}
        <div className="bg-base-100 rounded-lg mb-2">
          <div className="flex justify-between items-center px-3 ">
            <div className="flex items-center ">
              <IoIosShareAlt className="text-yellow-500 p-2 bg-yellow-100 text-3xl rounded-full" />
              <div className="w-10 rounded-full m-3 ">
                <img
                  className="rounded-full"
                  src="https://placeimg.com/80/80/people"
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="text-primary font-semibold text-sm">
                  <span className="font-bold">UnderWorld Shadhin</span> Share your post
                </h3>
                <p className="text-primary opacity-50 text-xs font-semibold my-0">
                  4 hours ago
                </p>
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 mx-2 "></div>
          </div>
        </div>
        {/* SHARE post ends============= */}


        {/* share post======(UNSEEN)======= */}
        <div className="bg-base-100 rounded-lg mb-2">
          <div className="flex justify-between items-center px-3 ">
            <div className="flex items-center ">
              <RiUserFollowFill className="text-blue-500 p-2 bg-blue-100 text-3xl rounded-full" />
              <div className="w-10 rounded-full m-3 ">
                <img
                  className="rounded-full"
                  src="https://placeimg.com/80/80/people"
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="text-primary font-semibold text-sm">
                  <span className="font-bold">Brilliant Alim</span> Followed you
                </h3>
                <p className="text-primary opacity-50 text-xs font-semibold my-0">
                  1 day ago
                </p>
              </div>
            </div>
           
         <button className="btn bg-secondary text-base-100 text-sm normal-case rounded-2xl">Follow Back</button>
           
          </div>
        </div>
        {/* SHARE post ends============= */}
      </div>

      {/* active sector----------------------------- */}
      <div class="col-span-2 h-28 rounded-lg sticky top-20">
        <Active />
      </div>
    </div>
  );
};

export default Notification;
