
import NavBar from "./NavBar";
import { ThreeDCardDemo } from './ThreeDCardDemo';
import { ThreeDCardDemo1 } from './ThreeDCardDemo1';
import { SmoothCursorDemo } from "./SmoothCursorDemo";
import { ThreeDCardDemo2 } from "./ThreeDCardDemo2";
import { ThreeDCardDemo3 } from "./ThreeDCardDemo3";
import { ThreeDCardDemo4 } from "./ThreeDCardDemo4";
import { ThreeDCardDemo5 } from "./ThreeDCardDemo5";
function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-black">
      <NavBar />

      <div className="px-4 md:px-10">
      <SmoothCursorDemo />
        <div className="mb-5 md:mb-10 text-center md:w-[50%]">
          <h2 className="text-xl text-[#67AE6E] font-medium">Portfolio</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Latest Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-center ">
          {/* Project 1 - Image */}
          <div className="">
          <ThreeDCardDemo />
            <ThreeDCardDemo1 />
            <ThreeDCardDemo2 />
          </div>
          {/* Project 2 - Video */}
          <div className="flex flex-col justify-start items-start">
            <ThreeDCardDemo4 />
          <ThreeDCardDemo3 />
          <ThreeDCardDemo5 />
          </div>
          
         
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-black dark:text-white hover:text-[#67AE6E] transition-colors">
            © 2025 Shifin Malik. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
