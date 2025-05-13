"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ProNot from "../assets/notepad.mp4";
import { Link } from "react-router-dom";

export function ThreeDCardDemo1() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        {/* Heading */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Notpad
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Notpad is an open-source project built with Svelte that allows users
          to create, edit, and manage notes efficiently. It emphasizes
          simplicity and performance, making it a lightweight and effective
          note-taking solution. The project has gained 81 stars and 38 forks on
          GitHub, reflecting its growing popularity in the developer community.
        </CardItem>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <video
            src={ProNot}
            autoPlay
            loop
            className="w-full max-w-xl object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
          >
            Your browser does not support the video tag.
          </video>
        </CardItem>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as="a"
            href="https://github.com/Muhammed-Rahif/Notpad"
            target="__blank"
            className="px-4 py-2 rounded-lg text-xs font-normal dark:text-white"
          >
            View on GitHub →
          </CardItem>
          <Link to="https://notpad-enhanced.vercel.app/">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Try Demo
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
