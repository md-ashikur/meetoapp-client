import React from "react";
import Post from "../../Components/Post/Post";
import CreatePost from "../Timeline/CreatePost";
import Birthday from "./Birthday/Birthday";
import RecentEvent from "./RecentEvent/RecentEvent";
import MightLike from "./YouMightLike/MightLike";

const Feed = () => {
  return (
  
      <div className="bg-neutral p-3 rounded-lg">
        <div className="grid grid-cols-6 gap-3">
          <div class="bg-neutral col-span-4">
            {/* create post start======================= */}
            <CreatePost />
            {/* create post END======================= */}

            <Post />
          </div>
          <div class="col-span-2 h-screen hidden lg:block">
            <MightLike></MightLike>
            <RecentEvent/>
            <Birthday/>
          </div>
        
        </div>
         
      </div>

  );
};

export default Feed;
