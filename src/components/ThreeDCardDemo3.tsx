"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import GOCART from "../assets/gocart.png";
import { Link } from "react-router-dom";

export function ThreeDCardDemo3() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        
        {/* Heading */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          GoCart – Scalable MERN E-Commerce Platform
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          GoCart is a scalable full-stack e-commerce platform built using the
          MERN stack with modular architecture. It features responsive React.js
          interfaces powered by Tailwind CSS and React Hooks, secure RESTful
          APIs with JWT authentication and RBAC, along with cart, wishlist,
          checkout, order management, and admin dashboard functionalities.
        </CardItem>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={GOCART}
            alt="GoCart"
            className="w-full max-w-xl object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
          />
        </CardItem>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-4">
          
          {/* GitHub */}
          <CardItem
            translateZ={20}
            as="a"
            href="https://github.com/Shifin-Malik/GoCart"
            target="_blank"
            className="px-4 py-2 rounded-lg text-xs font-normal dark:text-white"
          >
            View on GitHub →
          </CardItem>

          {/* Live Demo */}
          <Link to="https://go-cart-frontend-seven.vercel.app/">
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