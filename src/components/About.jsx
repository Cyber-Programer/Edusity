import React, { useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handelOverlayClick = (e) => {
    if (videoRef.current && !videoRef.current.contains(e.target)) {
      setShowVideo(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full " id="about">
      <div className="w-[90%] md:w-[82%] flex  flex-col-reverse justify-start gap-8 px-10 lg:flex-row">
        <div className="relative basis-[100%] md:basis-[40%] flex items-center justify-center">
          <img src="/assets/about.png" alt="" className=" rounded-xl" />
          <img
            onClick={() => {
              setShowVideo(true);
            }}
            src="/assets/play-ico.png"
            alt=""
            className="absolute w-20 cursor-pointer right-50 top-50"
          />
        </div>
        <div className="basis-[100%] md:basis-[56%]">
          <span className="font-semibold uppercase text-nav-bg">
            about university
          </span>
          <h3 className="w-[100%] text-3xl font-bold">
            Nurturing Tomorrow's Leaders Today
          </h3>
          <p className="pt-5 text-sm md:text-lg">
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education. With
            a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities. Whether
            you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </div>

      {/* video player */}
      {showVideo && (
        <div
          onClick={handelOverlayClick}
          className="absolute flex items-center justify-center w-full h-full bg-gray-800"
        >
          <video
          ref={videoRef}
            src="/assets/video.mp4"
            autoPlay
            controls
            className="w-[70rem]  border-4"
          ></video>
          <RxCross1
            onClick={() => {
              setShowVideo(false);
            }}
            className="absolute text-2xl font-bold text-white cursor-pointer top-10 right-10"
          />
        </div>
      )}
    </div>
  );
};

export default About;
