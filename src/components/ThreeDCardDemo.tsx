"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import DOC from '../../src/assets/Doctimeimg.png';

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        
        {/* Heading */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Doc-Time – Doctor Appointment Booking App
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Doc-Time is a full-stack doctor appointment booking app built with the MERN stack. It allows patients to book appointments, view doctor profiles, and manage schedules with ease. Built for efficiency and scalability.
        </CardItem>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">     
          <img
            src={DOC}
            height="1000"
            width="1000"
            className="h-[20%] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Doc-Time Doctor Appointment App"
          />
        </CardItem>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://github.com/Shifin-Malik/Doc-Time"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View on GitHub →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            href="https://doc-time-frontend1.vercel.app/"
            className="px-4 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Try Demo
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
