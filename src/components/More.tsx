import NavBar from "./NavBar";
import Coding from "@/assets/coding.png";
import Destination from "@/assets/destination.png";
import { Meteors } from "@/components/magicui/meteors";
import { TimelineDemo } from "./TimelineDemo";
import { MarqueeDemo } from "./MarqueeDemo";
import EDUCATION from  '@/assets/mortarboard.png'
import CALICUTUNIVERSTY from '@/assets/universityofcalicut.png'
import { Link } from "react-router-dom";
function More() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden p-5 bg-gray-50 dark:bg-black">
      <NavBar />
      <Meteors />
       <div className="flex flex-col h-full w-full items-center justify-start px-2 md:px-2 mt-5">
        <div className="flex items-center justify-start gap-2 md:w-[58%]">
          <h1 className="text-2xl md:text-4xl font-bold ">Who am I?</h1>
          <img
            src={Coding}
            alt="Profile"
            className="w-10 h-10 md:w-14 md:h-14 object-cover mt-1"
          />
        </div>
        <p className="mt-4 text-center md:text-left text-base md:text-xl font-normal text-gray-700 max-w-3xl dark:text-white">
          I'm a <span className="font-semibold">20-year-old web developer</span>{" "}
          from India. I recently completed my bachelor thesis on{" "}
          <span className="font-semibold">
            rendering strategies in React.js
          </span>
          . I'm currently learning the{" "}
          <span className="font-semibold">MERN stack</span> to enhance my
          full-stack development skills.
        </p>
      </div>
      <div className="flex flex-col h-full w-full items-center justify-start px-2 md:px-2 mt-5">
        <div className="flex items-center justify-start gap-2 md:w-[58%]">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">
            My journey
          </h1>
          <img
            src={Destination}
            alt="Profile"
            className="w-10 h-10 md:w-14 md:h-14 object-cover mt-1"
          />
        </div>
        <p className="mt-4 text-center md:text-left text-base md:text-xl font-normal text-gray-700 max-w-3xl dark:text-white">
          I've started my journey with studying computer science in 2021. Enjoy
          the timeline
        </p>
      </div>
      
      <div className="flex flex-col h-full w-full items-center justify-start px-2 mt-5 md:mt-7">
  {/* Section Title with Icon */}
  <div className="flex items-center justify-start gap-2 md:w-[58%]">
    <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">
      Education
    </h1>
    <img
      src={EDUCATION}
      alt="Education Icon"
      className="w-10 h-10 md:w-14 md:h-14 object-cover mt-1"
    />
  </div>

  {/* University Name with Icon */}
  <div className="flex items-center justify-start gap-3 md:w-[58%] mt-4">
    <Link to="https://www.nasracollege.com/">
    <img
      src={CALICUTUNIVERSTY}
      alt="University Icon"
      className="w-8 h-8 md:w-10 md:h-10 object-cover"
    />
    </Link>
    <h2 className="text-sm md:text-3xl font-semibold text-gray-800 dark:text-white">
      Calicut University
    </h2>
  </div>

  {/* College Name */}
  <p className="md:w-[58%] mt-2 text-left text-sm md:text-2xl font-medium text-gray-800 dark:text-white">
    Nasra College Of Arts and Science
  </p>

  {/* Degree Details */}
  <p className="md:w-[58%] mt-1 text-left text-sm md:text-xl font-normal text-gray-700 dark:text-white">
    Bachelor's Degree of Computer Applications (BCA)
  </p>
</div>



      <TimelineDemo />
     


       {/* Heading above Marquee */}
            <div className="mt-10 mb-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold hover:text-[#67AE6E]">
                Technologies I Work With
              </h2>
            </div>
      
            {/* Skills Marquee */}
            <MarqueeDemo />
            <h1 className="text-sm mt-8 text-black dark:text-gray-300 text-center hover:text-[#67AE6E]">
          © 2025 Shifin Malik. All rights reserved.
        </h1>
    </div>
  );
}

export default More;
