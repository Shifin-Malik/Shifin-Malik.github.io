"use client";

import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import PROIMG from "../assets/img.png";
import { IoMdCloudDownload } from "react-icons/io";
function NavBar() {
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    const path = location.pathname === "/" ? "home" : location.pathname.slice(1);
    setActive(path);
  }, [location.pathname]);

  const menuItems = ["Home", "Portfolio", "About", "Contact"];

  return (
    <div className="flex items-center justify-between px-6 md:px-12 py-4 relative bg-transparent dark:bg-transparent w-full">
      {/* Desktop View: Avatar & Centered Menu */}
      <div className="hidden md:flex items-center gap-10 w-full justify-between">
        {/* Left: Avatar */}
        <Link to="/" className="flex items-center hover:scale-105 transition-transform">
          <Avatar>
            <AvatarImage src={PROIMG} alt="Profile" />
          </Avatar>
        </Link>

        {/* Center: Nav Items */}
        <div className="flex gap-10">
          {menuItems.map((item) => {
            const path = item.toLowerCase() === "home" ? "" : item.toLowerCase();
            const isActive = active === item.toLowerCase();
            return (
              <Link
                key={item}
                to={`/${path}`}
                onClick={() => setActive(item.toLowerCase())}
                className={`relative text-lg font-semibold group ${
                  isActive ? "text-[#67AE6E]" : "text-black dark:text-white"
                }`}
              >
                <span className="group-hover:text-[#67AE6E] transition-colors">{item}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#67AE6E] transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right: Resume Button */}
        <Link to="/resume">
  <Button
    variant="outline"
    className="w-32 h-10 text-sm font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-[#67AE6E] dark:hover:bg-[#67AE6E] hover:text-white dark:hover:text-white transition-colors flex items-center justify-center gap-2"
  >
    Resume
    <IoMdCloudDownload className="text-base" />
  </Button>
</Link>
      </div>

      {/* Mobile View: Avatar on Left, Name in Center, Menu on Right */}
      <div className="flex md:hidden w-full items-center justify-between">
        {/* Left: Avatar */}
        <Link to="/" className="flex items-center hover:scale-105 transition-transform mr-4">
          <Avatar>
            <AvatarImage src={PROIMG} alt="Profile" />
          </Avatar>
        </Link>

        {/* Center: Name */}
        <Link to="/" className="text-xl font-bold text-black dark:text-white flex-1 text-center">
          
        </Link>

        {/* Right: Menu Icon */}
        <div className="flex items-center justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="">
                <Menu  className="h-12 w-12 text-black dark:text-white transition-transform hover:scale-125" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-8 bg-white dark:bg-black">
              <div className="flex flex-col space-y-8 mt-8">
                {[...menuItems, "Resume"].map((item) => {
                  const path = item.toLowerCase() === "home" ? "" : item.toLowerCase();
                  return (
                    <Link
                      key={item}
                      to={`/${path}`}
                      onClick={() => setActive(item.toLowerCase())}
                      className={`text-2xl font-bold transition-transform hover:scale-105 ${
                        active === item.toLowerCase()
                          ? "text-[#67AE6E]"
                          : "text-black dark:text-white hover:text-[#67AE6E]"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
