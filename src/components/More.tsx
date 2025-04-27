import NavBar from "./NavBar";
import Coding from "@/assets/coding.png";
import Destination from "@/assets/destination.png";
function More() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden p-5 bg-gray-50">
      <NavBar />
      <div className="flex flex-col h-full w-full items-center justify-start px-2 md:px-2 mt-5">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            Who am I?
          </h1>
          <img
            src={Coding}
            alt="Profile"
            className="w-10 h-10 md:w-14 md:h-14 object-cover mt-1"
          />
        </div>
        <p className="mt-4 text-center md:text-left text-base md:text-xl font-normal text-gray-700 max-w-3xl">
          I'm a <span className="font-semibold">22-year-old web developer</span> from Berlin. 
          I recently completed my bachelor thesis on <span className="font-semibold">rendering strategies in React/Next.js</span> 
          and now work full-time at a small company based in Berlin.
        </p>
      </div>
      <div className="flex flex-col h-full w-full items-center justify-start px-2 md:px-2 mt-5">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          My journey 
          </h1>
          <img
            src={Destination}
            alt="Profile"
            className="w-10 h-10 md:w-14 md:h-14 object-cover mt-1"
          />
        </div>
        <p className="mt-4 text-center md:text-left text-base md:text-xl font-normal text-gray-700 max-w-3xl">
        I've started my journey with studying computer science in 2021. Enjoy the timeline
        </p>
      </div>
    
    </div>
  );
}

export default More;
