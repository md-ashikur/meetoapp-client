import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import { GoReport } from "react-icons/go";
import { AiTwotoneSave } from "react-icons/ai";

import { FaRegComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { ReactionBarSelector } from "@charkour/react-reactions";

const Post = () => {
  const [reaction, setReaction] = useState(false);

  return (
    <div>
      <div className="bg-base-100 my-4 rounded-lg pb-5 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 rounded-full m-5">
              <img
                className="rounded-full"
                src="https://placeimg.com/80/80/people"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-primary">Md. Ashikur Rahman</p>
              <p className="text-xm text-primary font-semibold opacity-75">
                15h Public
              </p>
            </div>
          </div>
          {/* =================more option start============= */}
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className=" m-1">
              <FiMoreHorizontal className="text-3xl mx-5" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 font-bold shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="">
                  <AiTwotoneSave className="bg-[#d7f5e7] p-1 rounded-lg text-[#38cb89] text-3xl" />{" "}
                  Save post
                </Link>
              </li>
              <div className="divider my-0 px-2"></div>
              <li>
                <Link to="" className="">
                  <GoReport className="bg-[#ffddd6] p-1 rounded-lg text-[#ff5832] text-3xl" />{" "}
                  Report post
                </Link>
              </li>
            </ul>
          </div>
          {/* =================more option end============= */}
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          ></img>
        </div>

        <div className="flex items-center justify-between mt-4 mx-5">
          {/* ==========avater group========== */}
          <div className="avatar-group -space-x-2">
            <div className="avatar">
              <div className="w-6">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-6">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-6">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-6 bg-primary-focus text-[12px] text-base-100">
                <span>+99</span>
              </div>
            </div>
          </div>
          {/* ==========avater group end========== */}

          <div className="flex">
            <p className="text-xm text-primary font-semibold opacity-75 mx-3">
              3 Comments
            </p>
            <p className="text-xm text-primary font-semibold opacity-75">
              20 Share
            </p>
          </div>
        </div>
        <div className="divider my-0 px-5"></div>
        <div className="flex items-center justify-between px-5 font-bold text-primary">
          <div className="dropdown dropdown-top dropdown-hover  hover:scale-95 duration-75">
            <label tabIndex={0} className="">
              Love
            </label>
            <ul tabIndex={0} className="dropdown-content menu  ">
              <ReactionBarSelector />
            </ul>
          </div>
          <button className="flex items-center gap-3  hover:scale-95 duration-75">
            <FaRegComment /> Comments
          </button>
          <button className="flex items-center gap-3  hover:scale-95 duration-75">
            <IoIosShareAlt /> Share
          </button>
        </div>

        <div className="divider my-0 px-5"></div>
      </div>



      {/* post 2===================== */}
      <div className="bg-base-100 my-4 rounded-lg pb-5 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 rounded-full m-5">
              <img
                className="rounded-full"
                src="https://placeimg.com/80/80/people"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-primary">Md. Tanjil Sajin</p>
              <p className="text-xm text-primary font-semibold opacity-75">
                15h Public
              </p>
            </div>
          </div>
          {/* =================more option start============= */}
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className=" m-1">
              <FiMoreHorizontal className="text-3xl mx-5" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 font-bold shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="">
                  <AiTwotoneSave className="bg-[#d7f5e7] p-1 rounded-lg text-[#38cb89] text-3xl" />{" "}
                  Save post
                </Link>
              </li>
              <div className="divider my-0 px-2"></div>
              <li>
                <Link to="" className="">
                  <GoReport className="bg-[#ffddd6] p-1 rounded-lg text-[#ff5832] text-3xl" />{" "}
                  Report post
                </Link>
              </li>
            </ul>
          </div>
          {/* =================more option end============= */}
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          ></img>
        </div>

        <div className="flex items-center justify-between mt-4 mx-5">
          {/* ==========avater group========== */}
          <div className="avatar-group -space-x-2">
            <div className="avatar">
              <div className="w-6">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-6">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-6">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-6 bg-primary-focus text-[12px] text-base-100">
                <span>+99</span>
              </div>
            </div>
          </div>
          {/* ==========avater group end========== */}

          <div className="flex">
            <p className="text-xm text-primary font-semibold opacity-75 mx-3">
              3 Comments
            </p>
            <p className="text-xm text-primary font-semibold opacity-75">
              20 Share
            </p>
          </div>
        </div>
        <div className="divider my-0 px-5"></div>
        <div className="flex items-center justify-between px-5 font-bold text-primary">
          <div className="dropdown dropdown-top dropdown-hover  hover:scale-95 duration-75">
            <label tabIndex={0} className="">
              Love
            </label>
            <ul tabIndex={0} className="dropdown-content menu  ">
              <ReactionBarSelector />
            </ul>
          </div>
          <button className="flex items-center gap-3  hover:scale-95 duration-75">
            <FaRegComment /> Comments
          </button>
          <button className="flex items-center gap-3  hover:scale-95 duration-75">
            <IoIosShareAlt /> Share
          </button>
        </div>

        <div className="divider my-0 px-5"></div>
      </div>



      {/* post 3===================== */}
      <div className="bg-base-100 my-4 rounded-lg pb-5 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 rounded-full m-5">
              <img
                className="rounded-full"
                src="https://placeimg.com/80/80/people"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-primary">Md. Tanjil Sajin</p>
              <p className="text-xm text-primary font-semibold opacity-75">
                15h Public
              </p>
            </div>
          </div>
          {/* =================more option start============= */}
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className=" m-1">
              <FiMoreHorizontal className="text-3xl mx-5" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 font-bold shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="">
                  <AiTwotoneSave className="bg-[#d7f5e7] p-1 rounded-lg text-[#38cb89] text-3xl" />{" "}
                  Save post
                </Link>
              </li>
              <div className="divider my-0 px-2"></div>
              <li>
                <Link to="" className="">
                  <GoReport className="bg-[#ffddd6] p-1 rounded-lg text-[#ff5832] text-3xl" />{" "}
                  Report post
                </Link>
              </li>
            </ul>
          </div>
          {/* =================more option end============= */}
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          ></img>
        </div>

        <div className="flex items-center justify-between mt-4 mx-5">
          {/* ==========avater group========== */}
          <div className="avatar-group -space-x-2">
            <div className="avatar">
              <div className="w-6">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-6">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-6">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-6 bg-primary-focus text-[12px] text-base-100">
                <span>+99</span>
              </div>
            </div>
          </div>
          {/* ==========avater group end========== */}

          <div className="flex">
            <p className="text-xm text-primary font-semibold opacity-75 mx-3">
              3 Comments
            </p>
            <p className="text-xm text-primary font-semibold opacity-75">
              20 Share
            </p>
          </div>
        </div>
        <div className="divider my-0 px-5"></div>
        <div className="flex items-center justify-between px-5 font-bold text-primary">
          <div className="dropdown dropdown-top dropdown-hover  hover:scale-95 duration-75">
            <label tabIndex={0} className="">
              Love
            </label>
            <ul tabIndex={0} className="dropdown-content menu  ">
              <ReactionBarSelector />
            </ul>
          </div>
          <button className="flex items-center gap-3  hover:scale-95 duration-75">
            <FaRegComment /> Comments
          </button>
          <button className="flex items-center gap-3  hover:scale-95 duration-75">
            <IoIosShareAlt /> Share
          </button>
        </div>

        <div className="divider my-0 px-5"></div>
      </div>
    </div>
  );
};

export default Post;
