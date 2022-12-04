import React from "react";
import { Link } from "react-router-dom";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineLinkedCamera } from "react-icons/md";
const RecentEvent = () => {
  return (
    <div className="bg-base-100 rounded-lg my-3 p-3">
      <div className="flex justify-between items-center p-2">
        <h3 className="text-primary font-bold">Recent Event</h3>
      </div>
      <div className="divider my-0"></div>
      {/* =============================== */}

      <div className="bg-accent m-3 p-2 rounded-lg hover:scale-95 duration-75 ">
       <div className="flex gap-3">
        <SlGraduation className="text-5xl bg-[#d7f5e7] p-1 w-16 h-10  rounded-lg text-[#38cb89]"/>
        <div>
            <h3 className="font-bold text-primary text-sm break-words">Graduation Ceremony</h3>
            <p className="text-xs opacity-70 font-semibold break-words">The graduation ceremony is also something called...</p>
        </div>
       </div>
      </div>

      {/* 2nd event=================== */}
      <div className="bg-accent m-3 p-2 rounded-lg hover:scale-95 duration-75">
       <div className="flex gap-3">
        <MdOutlineLinkedCamera className="text-5xl bg-[#ffddd6]  p-2 w-16 h-10  rounded-lg text-[#ff5832]"/>
        <div>
            <h3 className="font-bold text-primary text-sm break-words">Photography Ideas</h3>
            <p className="text-xs  opacity-70 font-semibold break-words">Reflectons. Reflection work because they can create...</p>
        </div>
       </div>
      </div>
    </div>
  );
};

export default RecentEvent;
