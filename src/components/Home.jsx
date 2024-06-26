import React from "react";
import headerMobile from "../assets/images/bg-header-mobile.svg";
import headerDesktop from "../assets/images/bg-header-desktop.svg";
import photoSnap from "../assets/images/photosnap.svg";
import manage from "../assets/images/manage.svg";
import account from "../assets/images/account.svg";
import myHome from "../assets/images/myhome.svg";
import loopStudios from "../assets/images/loop-studios.svg";
import faceIt from "../assets/images/faceit.svg";
import shortly from "../assets/images/shortly.svg";
import insure from "../assets/images/insure.svg";
import eyeCam from "../assets/images/eyecam-co.svg";
import airFilter from "../assets/images/the-air-filter-company.svg";
import removeIcon from "../assets/images/icon-remove.svg";

const Home = () => {
  return (
    <div className="">
      <div className="w-[100vw]">
        <img
          src={headerMobile}
          alt=""
          className="w-full h-auto mobile-header "
        />
        <img src={headerDesktop} alt="" className="desktop-header w-full" />
      </div>

      <div className="w-full flex items-center justify-center max-w-[1024px] mx-auto">
        <div className="bg-white absolute top-[8rem] flex justify-between w-[89%] rounded mx-auto p-4 shadow-lg max-w-[1024px]">
          <div className="">
            <span></span>
            <span className="bg-[#7B8E8E]">
              <img src={removeIcon} alt="" />
            </span>
          </div>
          <button className="text-[#7B8E8E] underline hover:cursor-pointer hover:opacity-80">
            Clear
          </button>
        </div>
      </div>

      <div class="my-12 flex flex-col gap-6 max-w-[1024px] md:mt-[7rem] mx-auto">
        <div class="relative w-full pt-6">
          <img
            src={photoSnap}
            alt=""
            class="w-12 absolute top-[-10px] left-[40px] md:left-[60px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full md:flex-row md:justify-between md:items-center">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-[#7B8E8E]">Photosnap</span>
                  <span class="bg-[#7B8E8E] text-white text-md font-semibold px-2 py-1 rounded-[3rem] hover:cursor-pointer hover:opacity-90">
                    New!
                  </span>
                  <span class="bg-[#1e2e2e] text-white text-md font-semibold px-2 py-1 rounded-[3rem] hover:cursor-pointer hover:opacity-90">
                    FEATURED
                  </span>
                </div>
                <p class="text-lg font-semibold mt-2">
                  Senior Frontend Developer
                </p>
                <div class="flex items-center gap-2 text-[#7B8E8E] mt-2 text-md">
                  <span>1d ago</span>
                  <span>&bull;</span>
                  <span>Full Time</span>
                  <span>&bull;</span>
                  <span>USA only</span>
                </div>
                <hr class="my-4 border-gray-200" />
              </div>
              <div class="flex flex-wrap md:flex-nowrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Frontend
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Senior
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  HTML
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  CSS
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Javascript
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={manage}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px] md:left-[60px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full md:flex-row justify-between md:items-center">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-[#7B8E8E]">Manage</span>
                  <span class="bg-[#7B8E8E] text-white text-md font-semibold px-2 py-1 rounded-[3rem] hover:cursor-pointer hover:opacity-90">
                    New!
                  </span>
                  <span class="bg-[#1e2e2e] text-white text-md font-semibold px-2 py-1 rounded-[3rem] hover:cursor-pointer hover:opacity-90">
                    FEATURED
                  </span>
                </div>
                <p class="text-lg font-semibold mt-2">Full stack developer</p>
                <div class="flex items-center gap-2 text-[#7B8E8E] mt-2 text-md">
                  <span>1d ago</span>
                  <span>&bull;</span>
                  <span>Part Time</span>
                  <span>&bull;</span>
                  <span>Remote</span>
                </div>
                <hr class="my-4 border-gray-200" />
              </div>
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Fullstack
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Midweight
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Python
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  CSS
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  React
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={account}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px] md:left-[60px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full md:flex-row md:justify-between md:items-center">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-[#7B8E8E]">Account</span>
                  <span class="bg-[#7B8E8E] text-white text-md font-semibold px-2 py-1 rounded-[3rem] hover:cursor-pointer hover:opacity-90">
                    New!
                  </span>
                </div>
                <p class="text-lg font-semibold mt-2">
                  Junior Frontend Developer
                </p>
                <div class="flex items-center gap-2 text-[#7B8E8E] mt-2 text-md">
                  <span>2d ago</span>
                  <span>&bull;</span>
                  <span>Part Time</span>
                  <span>&bull;</span>
                  <span>USA only</span>
                </div>
                <hr class="my-4 border-gray-200" />
              </div>
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Frontend
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Junior
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  React
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Sass
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Javascript
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={myHome}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px] md:left-[60px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full md:flex-row md:justify-between md:items-center">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-[#7B8E8E]">MyHome</span>
                </div>
                <p class="text-lg font-semibold mt-2">
                  Junior Frontend Developer
                </p>
                <div class="flex items-center gap-2 text-[#7B8E8E] mt-2 text-md">
                  <span>5d ago</span>
                  <span>&bull;</span>
                  <span>Contract</span>
                  <span>&bull;</span>
                  <span>USA only</span>
                </div>
                <hr class="my-4 border-gray-200" />
              </div>
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Frontend
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Junior
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Css
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Javascript
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={loopStudios}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px] md:left-[60px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full md:flex-row md:justify-between md:items-center">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-[#7B8E8E]">Loop Studios</span>
                </div>
                <p class="text-lg font-semibold mt-2">Software Engineer</p>
                <div class="flex items-center gap-2 text-[#7B8E8E] mt-2 text-md">
                  <span>1w ago</span>
                  <span>&bull;</span>
                  <span>Full Time</span>
                  <span>&bull;</span>
                  <span>Worldwide</span>
                </div>
                <hr class="my-4 border-gray-200" />
              </div>
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Fullstack
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Midweight
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Javascript
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Sass
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Ruby
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={faceIt}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px] md:left-[60px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full md:flex-row md:justify-between md:items-center">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-[#7B8E8E]">FaceIt</span>
                </div>
                <p class="text-lg font-semibold mt-2">Full stack developer</p>
                <div class="flex items-center gap-2 text-[#7B8E8E] mt-2 text-md">
                  <span>2w ago</span>
                  <span>&bull;</span>
                  <span>Full Time</span>
                  <span>&bull;</span>
                  <span>UK only</span>
                </div>
                <hr class="my-4 border-gray-200" />
              </div>
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Backend
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Junior
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Ruby
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  RoR
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={shortly}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px] md:left-[60px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full md:flex-row md:items-center md:justify-between">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-[#7B8E8E]">Shortly</span>
                </div>
                <p class="text-lg font-semibold mt-2">Junior developer</p>
                <div class="flex items-center gap-2 text-[#7B8E8E] mt-2 text-md">
                  <span>2w ago</span>
                  <span>&bull;</span>
                  <span>Full Time</span>
                  <span>&bull;</span>
                  <span>Worldwide</span>
                </div>
                <hr class="my-4 border-gray-200" />
              </div>
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Frontend
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Junior
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  HTML
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Sass
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Javascript
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={insure}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px] md:left-[60px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full md:flex-row md:justify-between md:items-center">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-[#7B8E8E]">Insure</span>
                </div>
                <p class="text-lg font-semibold mt-2">
                  Junior Frontend developer
                </p>
                <div class="flex items-center gap-2 text-[#7B8E8E] mt-2 text-md">
                  <span>2w ago</span>
                  <span>&bull;</span>
                  <span>Full Time</span>
                  <span>&bull;</span>
                  <span>USA only</span>
                </div>
                <hr class="my-4 border-gray-200" />
              </div>
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Frontend
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Junior
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Vue
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Javascript
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Sass
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={eyeCam}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px] md:left-[60px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full md:flex-row md:items-center md:justify-between">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-[#7B8E8E]">Eyecam Co.</span>
                </div>
                <p class="text-lg font-semibold mt-2">Full Stack Engineer</p>
                <div class="flex items-center gap-2 text-[#7B8E8E] mt-2 text-md">
                  <span>3w ago</span>
                  <span>&bull;</span>
                  <span>Full Time</span>
                  <span>&bull;</span>
                  <span>Worldwide</span>
                </div>
                <hr class="my-4 border-gray-200" />
              </div>
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Fullstack
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Midweight
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Javacript
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Django
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Python
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={airFilter}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px] md:left-[60px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full md:flex-row md:items-center md:justify-between">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-[#7B8E8E]">
                    The Air Filter Company
                  </span>
                </div>
                <p class="text-lg font-semibold mt-2">Front-end Dev</p>
                <div class="flex items-center gap-2 text-[#7B8E8E] mt-2 text-md">
                  <span>1m ago</span>
                  <span>&bull;</span>
                  <span>Part Time</span>
                  <span>&bull;</span>
                  <span>Worldwide</span>
                </div>
                <hr class="my-4 border-gray-200" />
              </div>
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Frontend
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Junior
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  React
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Sass
                </span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded hover:cursor-pointer hover:opacity-90 hover:bg-[#7B8E8E] hover:text-white">
                  Javascript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
