"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import QUIZ from "../assets/quiz.mp4";
import { Link } from "react-router-dom";

export function ThreeDCardDemo4() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        {/* Heading */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Quiz Battle Game
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Quiz Battle is a fast-paced multiplayer and singleplayer trivia game
          built with Reactjs. Challenge friends on LAN or test your knowledge
          solo across various categories with real-time scoring.
        </CardItem>

        {/* Video */}
        <CardItem translateZ="100" className="w-full mt-4">
          <video
            src={QUIZ}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-96 max-w-xl object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
          >
            Your browser does not support the video tag.
          </video>
        </CardItem>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as="a"
            href="https://github.com/YourGitHub/QuizBattle"
            target="_blank"
            className="px-4 py-2 rounded-lg text-xs font-normal dark:text-white"
          >
            View on GitHub →
          </CardItem>
          <Link to="https://quiz-battle-demo.vercel.app/">
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
