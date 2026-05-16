"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ORBITONCX from "../assets/orbitoncx.png";
import { Link } from "react-router-dom";

export function ThreeDCardDemo1() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        {/* Heading */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          OrbitOnCX – AI-Powered Coding Learning Platform
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          OrbitOnCX is a production-grade AI-powered coding learning platform
          built using the MERN stack, Docker, Vercel, and Render. It features
          in-browser code execution with Monaco Editor and Judge0 API,
          AI-powered coding assistance using Groq AI, LeetCode-style problem
          solving, real-time discussions and messaging with Socket.IO, and a
          secure backend architecture powered by REST APIs, RBAC, Redis caching,
          and MongoDB.
        </CardItem>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={ORBITONCX}
            alt="OrbitOnCX"
            className="w-full max-w-xl object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
          />
        </CardItem>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-4">
          {/* GitHub */}
          <CardItem
            translateZ={20}
            as="a"
            href="https://github.com/Shifin-Malik/OrbitOnCX"
            target="_blank"
            className="px-4 py-2 rounded-lg text-xs font-normal dark:text-white"
          >
            View on GitHub →
          </CardItem>

          {/* Live Demo */}
          <Link to="https://orbitoncx.vercel.app/">
            <CardItem
              translateZ={20}
              as="a"
              target="_blank"
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
