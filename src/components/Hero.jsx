import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 text-center hero" id="home">
      <h1 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl w-[100%] md:w-[70%] lg:w-[50%]">
        We Ensure better education for a better world
      </h1>
      <p className="text-sm lg:text-xl  text-gray-300 w-[100%] md:w-[70%] lg:w-[50%] font-semibold">
        Our cutting-edge curriculum is designed to empower students with the
        knowledge, skills, and experiences needed to excel in the dynamic field
        of education
      </p>
      <button className="flex items-center gap-3 px-5 py-2 font-semibold text-black bg-white rounded-2xl">
        Explore more <FaArrowRightLong />{" "}
      </button>
    </div>
  );
};

export default Hero;
