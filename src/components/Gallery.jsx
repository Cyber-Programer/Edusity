import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center px-20" id="campus">
      <span className="font-bold uppercase text-nav-bg">Gallery</span>
      <h2 className="text-3xl font-bold">Campus Photos</h2>
      <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-4">
        <img className="rounded-lg" src="/assets/gallery-1.png" alt="" />
        <img className="rounded-lg" src="/assets/gallery-2.png" alt="" />
        <img className="rounded-lg" src="/assets/gallery-3.png" alt="" />
        <img className="rounded-lg" src="/assets/gallery-4.png" alt="" />
      </div>
      <button className="flex items-center justify-center gap-5 px-5 py-2 mt-10 font-semibold text-white capitalize rounded-3xl bg-nav-bg">
        See more here <FaLongArrowAltRight />
      </button>
    </div>
  );
};

export default Gallery;
