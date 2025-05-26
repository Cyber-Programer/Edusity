import React, { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="relative flex flex-col items-center justify-center px-4 md:px-20" id="testimonials">
      <span className="font-bold capitalize text-nav-bg">TESTIMONIALS</span>
      <h2 className="text-3xl font-bold">What Students Say</h2>

      {/* Cards & Buttons wrapper */}
      <div className="relative flex w-full mt-20">
        {/* Scrollable Cards */}
        <div
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
          ref={scrollRef}
        >
          {/* div 1 */}
          <div className="px-5 py-2 bg-white rounded-lg shadow-lg w-[300px] py-10 shrink-0">
            <div className="flex items-center justify-start gap-3">
              <img
                src="/assets/user-3.png"
                alt=""
                className="border-4 rounded-full border-nav-bg w-14"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold capitalize">Name</span>
                <span className="text-sm text-gray-400 capitalize">
                  Location
                </span>
              </div>
            </div>
            <div>
              <p className="mt-5 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
                molestiae.
              </p>
            </div>
          </div>

          {/* div 2 */}
          <div className="px-5 py-2 bg-white rounded-lg shadow-lg w-[300px] py-10 shrink-0">
            <div className="flex items-center justify-start gap-3">
              <img
                src="/assets/user-3.png"
                alt=""
                className="border-4 rounded-full border-nav-bg w-14"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold capitalize">Name</span>
                <span className="text-sm text-gray-400 capitalize">
                  Location
                </span>
              </div>
            </div>
            <div>
              <p className="mt-5 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
                molestiae.
              </p>
            </div>
          </div>

          {/* div 3 */}
          <div className="px-5 py-2 bg-white rounded-lg shadow-lg w-[300px] py-10 shrink-0">
            <div className="flex items-center justify-start gap-3">
              <img
                src="/assets/user-3.png"
                alt=""
                className="border-4 rounded-full border-nav-bg w-14"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold capitalize">Name</span>
                <span className="text-sm text-gray-400 capitalize">
                  Location
                </span>
              </div>
            </div>
            <div>
              <p className="mt-5 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
                molestiae.
              </p>
            </div>
          </div>

          {/* div 4 */}
          <div className="px-5 py-2 bg-white rounded-lg shadow-lg w-[300px] py-10 shrink-0">
            <div className="flex items-center justify-start gap-3">
              <img
                src="/assets/user-3.png"
                alt=""
                className="border-4 rounded-full border-nav-bg w-14"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold capitalize">Name</span>
                <span className="text-sm text-gray-400 capitalize">
                  Location
                </span>
              </div>
            </div>
            <div>
              <p className="mt-5 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
                molestiae.
              </p>
            </div>
          </div>

          {/* div 5 */}
          <div className="px-5 py-2 bg-white rounded-lg shadow-lg w-[300px] py-10 shrink-0">
            <div className="flex items-center justify-start gap-3">
              <img
                src="/assets/user-3.png"
                alt=""
                className="border-4 rounded-full border-nav-bg w-14"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold capitalize">Name</span>
                <span className="text-sm text-gray-400 capitalize">
                  Location
                </span>
              </div>
            </div>
            <div>
              <p className="mt-5 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
                molestiae.
              </p>
            </div>
          </div>

          {/* div 6 */}
          <div className="px-5 py-2 bg-white rounded-lg shadow-lg w-[300px] py-10 shrink-0">
            <div className="flex items-center justify-start gap-3">
              <img
                src="/assets/user-3.png"
                alt=""
                className="border-4 rounded-full border-nav-bg w-14"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold capitalize">Name</span>
                <span className="text-sm text-gray-400 capitalize">
                  Location
                </span>
              </div>
            </div>
            <div>
              <p className="mt-5 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
                molestiae.
              </p>
            </div>
          </div>

          {/* div 7 */}
          <div className="px-5 py-2 bg-white rounded-lg shadow-lg w-[300px] py-10 shrink-0">
            <div className="flex items-center justify-start gap-3">
              <img
                src="/assets/user-3.png"
                alt=""
                className="border-4 rounded-full border-nav-bg w-14"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold capitalize">Name</span>
                <span className="text-sm text-gray-400 capitalize">
                  Location
                </span>
              </div>
            </div>
            <div>
              <p className="mt-5 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
                molestiae.
              </p>
            </div>
          </div>
        </div>

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 p-2 transform -translate-y-1/2 bg-white rounded-full shadow top-1/2"
        >
          <FaChevronLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 p-2 transform -translate-y-1/2 bg-white rounded-full shadow top-1/2"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
