import React from "react";
import Post from "../../Components/Post/Post";
import CreatePost from "../Timeline/CreatePost";

const Feed = () => {
  return (
  
      <div class="  rounded-lg ">
        <div className="grid grid-cols-5 gap-2">
          <div class="bg-neutral col-span-3 p-3">
            {/* create post start======================= */}
            <CreatePost />
            {/* create post END======================= */}

            <Post />
          </div>
          <div class="bg-secondary h-screen">01cf</div>
          {/* active sector----------------------------- */}
          <div class="bg-red-400 col-span-1 h-screen rounded-lg">
            07fddddddddddddddddddd
          </div>
        </div>
      </div>

  );
};

export default Feed;
