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

const Home = () => {
  return (
    <div className="">
      <img src={headerMobile} alt="" className="w-full h-auto mobile-header" />
      <img src={headerDesktop} alt="" className="desktop-header" />

      <div class="my-8 flex flex-col gap-6">
        <div class="relative w-full pt-6">
          <img
            src={photoSnap}
            alt=""
            class="w-12 absolute top-[-10px] left-[40px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full">
              <div class="flex items-center gap-2">
                <span class="font-bold text-[#7B8E8E]">Photosnap</span>
                <span class="bg-[#7B8E8E] text-white text-md font-semibold px-2 py-1 rounded-[3rem]">
                  New!
                </span>
                <span class="bg-[#1e2e2e] text-white text-md font-semibold px-2 py-1 rounded-[3rem]">
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
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Frontend</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Senior</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">HTML</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">CSS</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Javascript</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={manage}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full">
              <div class="flex items-center gap-2">
                <span class="font-bold text-[#7B8E8E]">Manage</span>
                <span class="bg-[#7B8E8E] text-white text-md font-semibold px-2 py-1 rounded-[3rem]">
                  New!
                </span>
                <span class="bg-[#1e2e2e] text-white text-md font-semibold px-2 py-1 rounded-[3rem]">
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
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Fullstack</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Midweight</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Python`</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">CSS</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">React</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={account}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full">
              <div class="flex items-center gap-2">
                <span class="font-bold text-[#7B8E8E]">Account</span>
                <span class="bg-[#7B8E8E] text-white text-md font-semibold px-2 py-1 rounded-[3rem]">
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
                <span>USA only`</span>
              </div>
              <hr class="my-4 border-gray-200" />
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Frontend</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Junior</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">React</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Sass</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Javascript</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={myHome}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full">
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
                <span>USA only`</span>
              </div>
              <hr class="my-4 border-gray-200" />
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Frontend</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Junior</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Css</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Javascript</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={loopStudios}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full">
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
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Fullstack</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Midweight</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Javascript`</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Sass</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Ruby</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={manage}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full">
              <div class="flex items-center gap-2">
                <span class="font-bold text-[#7B8E8E]">Manage</span>
                <span class="bg-[#7B8E8E] text-white text-md font-semibold px-2 py-1 rounded-[3rem]">
                  New!
                </span>
                <span class="bg-[#1e2e2e] text-white text-md font-semibold px-2 py-1 rounded-[3rem]">
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
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Fullstack</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Midweight</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Python`</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">CSS</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">React</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={faceIt}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full">
              <div class="flex items-center gap-2">
                <span class="font-bold text-[#7B8E8E]">FAceIt</span>
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
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Backend</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Junior</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Ruby</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">RoR</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={shortly}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full">
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
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Frontend</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Junior</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">HTML</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Sass</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Javascript</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={insure}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full">
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
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Frontend</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Junior</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Vue</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Javascript</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Sass</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={eyeCam}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full">
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
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Fullstack</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Midweight</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Javacript</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Django`</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Python`</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full pt-6">
          <img
            src={airFilter}
            alt=""
            class="w-12 absolute top-[-4px] left-[40px]"
          />
          <div class="shadow-xl w-[93%] mx-auto rounded-md flex h-full relative">
            <div class="bg-[#7B8E8E] w-2 absolute top-0 bottom-0 left-0 rounded-tl-md rounded-bl-md"></div>
            <div class="py-6 px-4 flex flex-col w-full">
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
              <div class="flex flex-wrap gap-2 text-md text-[#7B8E8E]">
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Frontend</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Junior</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">React</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Sass</span>
                <span class="bg-[#e0f5f5] px-2 py-1 rounded">Javascript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
