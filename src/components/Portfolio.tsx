import Pro1 from '../../src/assets/pro1.png'
import NavBar from "./NavBar";

function Portfolio() {
  return (
    <div className="p-5">
    <NavBar />
      <div className="mx-4 md:px-8 grid grid-cols-1 md:grid-cols-2 min-h-screen w-full pt-6 gap-x-6 gap-y-10">
        {/* Left Side: Text & Images */}
        <div className="flex flex-col justify-start items-start px-4 md:px-10 space-y-6">
          <div>
            <h1 className="text-[#67AE6E] text-2xl">Portfolio</h1>
            <h1 className="text-5xl font-semibold">Latest Projects</h1>
          </div>
          <img
           src={Pro1}
            alt="Project 1"
            className="w-full max-w-lg object-cover rounded-xl shadow-lg"
          />
          <img
            src="https://hamzanaseem.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.cccf8d95.png&w=1080&q=75"
            alt="Project 2"
            className="w-full max-w-lg object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side: Images */}
        <div className="flex flex-col justify-center items-center px-4 md:px-10 space-y-6">
          <img
            src="https://hamzanaseem.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.6496b8e7.jpg&w=1080&q=75"
            alt="Project 3"
            className="w-full max-w-lg object-cover rounded-xl shadow-lg"
          />
          <img
            src="https://hamzanaseem.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.cd041498.jpg&w=1080&q=75"
            alt="Project 4"
            className="w-full max-w-lg object-cover rounded-xl shadow-lg"
          />
        </div>
          </div>

          <h1 className="text-xl mt-8 text-black dark:text-gray-300 text-center hover:text-[#67AE6E]">
          © 2025 Shifin Malik. All rights reserved.
        </h1>
    </div>
  );
}

export default Portfolio;
