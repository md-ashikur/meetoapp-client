import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { RiSendPlane2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Birthday = () => {
  return (
    <div className="bg-base-100 rounded-lg p-3">
      <div className="flex justify-between items-center p-2">
        <h3 className="text-primary font-bold">Birthdays</h3>
        <Link to="">
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
            Birthday today
          </p>
        </div>
      </div>

      <div className="form-control">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Write on his inbox..."
            className="input input-bordered h-8 text-sm bg-accent focus:outline-none border-0"
          />
          <button className=" ml-2 text-secondary pl-2 hover:text-[#38cb89]  text-xl bg-blue-100 hover:scale-90 transition ease-in-out rounded-lg h-8 w-9">
            <RiSendPlane2Line />
          </button>
        </div>
      </div>

      {/* upcoming birthday========================== */}
      <div className="bg-accent my-4 mx-2 p-2  hover:scale-95 duration-75 rounded-lg ">
        <div className="flex gap-3">
          <FaBirthdayCake className="text-5xl bg-[#ffddd6]  p-2 w-16 h-10  rounded-lg text-[#ff5832]" />
          <div>
            <h3 className="font-bold text-primary text-sm break-words">
              Upcomming birthdays
            </h3>
            <p className="text-xs  opacity-70 font-semibold break-words">
              See 15 others have upcomming birthdays
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
