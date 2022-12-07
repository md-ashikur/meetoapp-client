import React from "react";
import Post from "../../Components/Post/Post";
import CreatePost from "../Timeline/CreatePost";
import Active from "./Active/Active";
import Birthday from "./Birthday/Birthday";
import RecentEvent from "./RecentEvent/RecentEvent";
import MightLike from "./YouMightLike/MightLike";

const Feed = () => {
  return (
    <div className="grid lg:grid-cols-10 gap-3">
      <div className="bg-neutral p-3 lg:col-span-8 rounded-lg">
        <div className=" grid lg:grid-cols-12 gap-3">
          <div class="bg-neutral lg:col-span-8">
            <CreatePost />
            <Post />
          </div>
          <div class="col-span-4  h-screen hidden lg:block">
            <MightLike></MightLike>
           <div className="my-3">
           <RecentEvent />
           </div>
            <Birthday />
          </div>
        </div>
        {/* active sector----------------------------- */}
      </div>
      <div class="lg:col-span-2 h-28 rounded-lg hidden lg:block sticky top-20">
        <Active />
      </div>
    </div>
  );
};

export default Feed;
