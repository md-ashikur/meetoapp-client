import React from 'react';
import { RiLiveFill } from "react-icons/ri";
import { BsImages, BsEmojiLaughing } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

const CreatePost = () => {
    return (
        <div>
              <div className="bg-base-100 py-4 rounded-lg">
                <div className="grid grid-cols-9 gap-4 px-5">
                  <div className="w-12 rounded-full ">
                    <img
                      className="rounded-full"
                      src="https://placeimg.com/80/80/people"
                      alt=""
                    />
                  </div>
                  <div className="form-control col-span-8">
                    <div class="wrapper">
                      <a href="#demo-modal">
                        <input
                          type="text"
                          placeholder="What's happening?"
                          className="input caret-primary py-1 rounded-full ease-in-out lg:w-full focus:outline-none transition duration-700 input-bordered bg-accent "
                        />
                      </a>
                    </div>
                    {/* modal===================================== */}
                    <div id="demo-modal" class="modal">
                      <div class="modal__content ">
                        <div className="flex items-center my-5">
                          <h2 className="text-2xl text-primary font-bold">
                            Create a post
                          </h2>
                          <div>
                            <select className="bg-accent mx-3 p-1 rounded-lg text-primary text-bold">
                              <option value="public">Public</option>
                              <option value="friends">Friends</option>
                              <option value="onlyMe">Only me</option>
                            </select>
                          </div>
                        </div>
                        <div className="divider"></div>
                        
                        <div className="flex justify-between">
                          <div className="w-12 rounded-full">
                            <img
                              className="rounded-full"
                              src="https://placeimg.com/80/80/people"
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="form-control">
                              <textarea
                                type="text"
                                placeholder="What's happening?"
                                className="input h-28 mx-3 caret-primary py-1 rounded-lg ease-in-out lg:w-[550px] focus:outline-none border-none transition duration-700 input-bordered bg-accent "
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center my-3 ml-7">
                          <button className="flex items-start justify-center font-bold">
                            <RiLiveFill className="text-2xl mx-2" /> Live Video
                          </button>
                          <button className="flex items-start justify-center font-bold">
                            <BsImages className="text-2xl mx-2" /> Photo/Video
                          </button>
                          <button className="flex items-start justify-center font-bold">
                            <BsEmojiLaughing className="text-2xl mx-2" />
                            Feeling/activity
                          </button>
                        </div>
                        <button
                          type=""
                          className="btn bg-secondary text-base-100  w-full"
                        >
                          Post
                        </button>
                      

                        <a href="#" class="modal__close">
                          <ImCancelCircle className="text-3xl m-2 hover:text-red-500" />
                        </a>
                      </div>
                    </div>
                    {/* modal end========================== */}
                  </div>
                </div>

                <div className="flex justify-between gap-4 text-center text-primary pt-3 px-5">
                  <a
                    href="#demo-modal"
                    className="flex items-center justify-center font-bold"
                  >
                    <RiLiveFill className="text-2xl mx-2" /> Live Video
                  </a>
                  <a
                    href="#demo-modal"
                    className="flex items-start justify-center font-bold"
                  >
                    <BsImages className="text-2xl mx-2" /> Photo/Video
                  </a>
                  <a
                    href="#demo-modal"
                    className="flex items-start justify-center font-bold"
                  >
                    <BsEmojiLaughing className="text-2xl mx-2" />
                    Feeling/activity
                  </a>
                </div>
              </div>
        </div>
    );
};

export default CreatePost;