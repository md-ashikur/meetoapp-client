import React from "react";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const MightLike = () => {
  return (
    <div className="bg-base-100 rounded-lg p-3 ">
      <div className="flex justify-between items-center p-2">
        <h3 className="text-primary font-bold">You Might Like</h3>
        <Link to="/community">
          <p className="text-secondary text-sm font-semibold">See All</p>
        </Link>
      </div>
      <div className="divider my-0"></div>
      {/* =============================== */}
      <div className="flex items-center">
        <div className="w-10 rounded-full m-3 ">
          <img
            className="rounded-full"
            src="https://placeimg.com/80/80/people"
            alt=""
          />
        </div>
        <div>
          <h3 className="text-primary font-bold text-sm">Radovan Alic</h3>
          <p className="text-primary opacity-50 text-xs font-semibold my-0">
            Founder at Trophy
          </p>
        </div>
      </div>
      <div className="flex gap-2 my-2 justify-center text-lg ">
        <Link to="">
          <AiOutlineFacebook className="hover:text-[#38cb89] hover:scale-125" />
        </Link>
        <Link to="">
          <FiTwitter className="hover:text-[#38cb89] hover:scale-125" />
        </Link>
        <Link to="">
          <BsInstagram className="hover:text-[#38cb89] hover:scale-125" />
        </Link>
        <Link to="">
          <AiOutlineLinkedin className="hover:text-[#38cb89] hover:scale-125" />
        </Link>
      </div>
      <div className="flex gap-2 justify-between">
        <Link to="">
          <button className="font-bold text-primary hover:bg-secondary border-2  hover:border-secondary hover:text-base-100 hover:scale-90 duration-75 ease-in-out rounded-xl text-xs px-10 my-2 py-2">
            Ignore
          </button>
        </Link>
        <Link to="">
          <button className="font-bold text-base-100 bg-secondary   border-2 border-secondary hover:text-base-100 hover:scale-90 duration-75 ease-in-out rounded-xl text-xs px-10 my-2 py-2">
            Follow
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MightLike;
