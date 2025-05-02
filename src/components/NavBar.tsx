"use client";

import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

function NavBar() {
  return (
    <div className="md:flex items-center justify-between px-6 md:px-12 py-4 relative bg-transparent dark:bg-transparent w-full">
      
      {/* Left Side (Desktop: Avatar) */}
      <Link to="/" className="hidden md:flex items-center hover:scale-105 transition-transform duration-300">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>

      {/* Center: Desktop Navigation */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-10">
        {["Home", "Portfolio", "About", "Contact"].map((item) => (
          <Link 
            key={item} 
            to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
            className="relative text-lg font-semibold text-black dark:text-white group"
          >
            <span className="transition-colors group-hover:text-[#67AE6E]">{item}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#67AE6E] transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Resume Button (Desktop Only) */}
        <div className="hidden md:block">
          <Link to="/resume">
            <Button
              variant="outline"
              className="w-32 h-10 text-sm font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-[#67AE6E] dark:hover:bg-[#67AE6E] hover:text-white dark:hover:text-white transition-colors"
            >
              Resume
            </Button>
          </Link>
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden items-center justify-between w-full gap-10">
          {/* Mobile: Name Left */}
          <Link to="/" className="text-xl font-bold text-black dark:text-white">
            Shifin Malik
          </Link>
       

          {/* Mobile: Menu Icon Right */}
         <div className="flex items-center justify-end ">
         <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="p-2">
                <Menu className="h-9 w-9 text-black dark:text-white transition-transform duration-300 hover:scale-125" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-8 bg-white dark:bg-black">
              <div className="flex flex-col space-y-8 mt-8">
                {["Home", "Portfolio", "Resume", "About", "Contact"].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-2xl font-bold text-black dark:text-white hover:text-[#67AE6E] transition-transform hover:scale-105"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
         </div>
        </div>

      </div>

    </div>
  );
}

export default NavBar;
