import React from "react";
import { AiOutlineHeart, AiOutlineHome, AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { GiEarthAmerica } from "react-icons/gi";
import { RiCake2Line } from "react-icons/ri";
import { SlGraduation } from "react-icons/sl";
import { TbCellSignal5 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="text-primary">
     

      {/* ------------study------------ */}
      <div className="grid grid-cols-7 ">
        <SlGraduation className="text-xl "/>
        <p className="col-span-6 text-sm ">
          Studies at
          <span className="font-bold ml-1 text-primary">
            Pundra University of Science & Technology, Bogura
          </span>
        </p>
      </div>

      {/* born-------------------- */}
      <div className="grid grid-cols-7 my-2">
        <RiCake2Line className="text-xl" />
        <p className="col-span-6 text-sm ">
         Born January 22, 2002
        </p>
      </div>

      {/* address-------------------- */}
      <div className="grid grid-cols-7 my-2">
        <AiOutlineHome className="text-xl" />
        <p className="col-span-6 text-sm ">
        Lives in
          <span className="font-bold ml-1 text-primary">
          Bogura
          </span>
        </p>
      </div>

      {/* relation-------------------- */}
      <div className="grid grid-cols-7 my-2">
        <AiOutlineHeart className="text-xl" />
        <p className="col-span-6 text-sm font-semibold ">
        Single
         
        </p>
      </div>

      {/* Followers------------------- */}
      <div className="grid grid-cols-7 my-2">
        <TbCellSignal5 className="text-xl" />
        <p className="col-span-6 text-sm font-semibold ml-1 ">
       5,001 Followers
         
        </p>
      </div>

      {/* web------------------- */}
      <div className="grid grid-cols-7 my-2">
        <GiEarthAmerica className="text-xl" />
        <a href="https://ashikur-rahman1.web.app/" target="_blank" className="col-span-6 hover:text-secondary text-sm font-semibold ml-1 ">
       ashikur.rahman1.web.app
         
        </a>
      </div>

      {/* twitter------------------- */}
      <div className="grid grid-cols-7 my-2">
        <FiTwitter className="text-xl" />
        <a href="https://twitter.com/mdashik_1" target="_blank" className="col-span-6 hover:text-secondary text-sm font-semibold ml-1 ">
        mdashik_1
         
        </a>
      </div>

      {/* instagram------------------- */}
      <div className="grid grid-cols-7 my-2">
        <BsInstagram className="text-xl" />
        <a href="https://www.instagram.com/md_ashikur_1" target="_blank" className="col-span-6 hover:text-secondary text-sm font-semibold ml-1 ">
        md_ashikur_1
         
        </a>
      </div>

      {/* linkedin------------------- */}
      <div className="grid grid-cols-7 my-2">
        <AiOutlineLinkedin className="text-xl" />
        <a href="https://www.linkedin.com/in/md-ashikur-rahman" target="_blank" className="col-span-6 hover:text-secondary text-sm font-semibold ml-1 ">
        md-ashikur-rahman
         
        </a>
      </div>

     

      

   
      
      
    </div>
  );
};

export default Intro;
