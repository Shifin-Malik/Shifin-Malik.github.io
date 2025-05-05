import Pro1 from '../../src/assets/pro1.png';
import ProNot from '../assets/notepad.mp4';
import NavBar from "./NavBar";

function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-black">
      <NavBar />

      <div className="px-4 md:px-10 ">
        <div className="mb-5 md:mb-10 text-center md:w-[50%]">
          <h2 className="text-xl text-[#67AE6E] font-medium">Portfolio</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Latest Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Project 1 - Image */}
          <div className="flex justify-center items-center">
            <img
              src={Pro1}
              alt="Project 1"
              className="w-full max-w-xl object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

          {/* Project 2 - Video */}
          <div className="flex justify-start items-start">
            <video
              src={ProNot}
              controls
              autoPlay
              loop
              className="w-full max-w-xl object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#67AE6E] transition-colors">
            © 2025 Shifin Malik. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
