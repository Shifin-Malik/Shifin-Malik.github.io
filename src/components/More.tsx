import NavBar from "./NavBar";
import Coding from "@/assets/coding.png";
import Destination from "@/assets/destination.png";
import { MarqueeDemo } from "./MarqueeDemo";
function More() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden p-5 bg-gray-50 dark:bg-black">
      <NavBar />
      <div className="flex flex-col h-full w-full items-center justify-start px-2 md:px-2 mt-5">
        <div className="flex items-center justify-start gap-2 w-[58%]">
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
        <div className="flex items-center justify-start gap-2 w-[58%]">
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
      <MarqueeDemo />
    </div>
  );
}

export default More;
