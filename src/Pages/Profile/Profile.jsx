import React from "react";
import Post from "../../Components/Post/Post";
import RecentEvent from "../Feed/RecentEvent/RecentEvent";
import MightLike from "../Feed/YouMightLike/MightLike";
import CreatePost from "../Timeline/CreatePost";
import Intro from "./Intro";

const Profile = () => {
  return (
    <div>
      {/* cover section start================ */}
      <div className="relative top-0 shadow-lg bg-base-100 rounded-lg">
        <div className="w-full h-72 relative overflow-hidden rounded-lg">
          <img
            className="w-full relative lg:-top-48"
            src="https://images.unsplash.com/photo-1513704519535-f5c81aa78d0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>

        <div className="absolute top-52 left-10">
          <div className="avatar p-1 bg-base-100 rounded-full">
            <div className="w-28 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="px-10 py-5 my-7">
       
          <h3 className="text-2xl text-primary font-bold">Md Ashikur Rahman</h3>
          <p className="font-semibold text-primary opacity-60">
            All your dreams can come true and I'll make sure of it.
          </p>
        </div>
      </div>

 {/* cover section end================ */}

      {/* profile body=================== */}
      <div className="grid lg:grid-cols-12 gap-3 bg-neutral p-3 rounded-lg">
   
        
        <div class="col-span-3 h-screen hidden lg:block">
           <div className="bg-base-100 p-3 rounded-lg">
           <Intro/>
           </div>
          
          </div>
          <div class="bg-neutral col-span-6">
            <CreatePost />
            <Post />
          </div>
          <div class="col-span-3 h-screen hidden lg:block ">
            
            <RecentEvent />
          
          </div>
      
      
     
      
    </div>
    </div>
  );
};

export default Profile;
