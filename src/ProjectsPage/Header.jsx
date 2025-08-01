import React from "react";
import imageHeader from "../assets/Projects/project.png";
const Header = () => {
  return (
    <div className="relative">
      <div>
        <img src={imageHeader} alt="" className="py-20" />
      </div>
      <div className='flex items-center justify-center p-2 px-6 bg-second text-white  w-fit mx-auto rounded-full  gap-3 mb-8'>
      <h2 className="text-center font-bold text-xl md:text-2xl ">Portfolio</h2>
      </div>
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-1/4 left-1/6 w-6 h-6 bg-primary/20 rounded-full animate-float-scale"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-second/30 rounded-full animate-bounce-scale"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-third/25 rounded-full animate-pulse-scale"></div>
        <div className="absolute top-1/2 right-1/6 w-5 h-5 bg-primary/15 rounded-full animate-rotate-scale"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-second/20 rounded-full animate-wave-scale"></div>

        {/* Floating Triangles */}
        <div className="absolute top-1/6 left-1/4 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-primary/30 animate-float-scale"></div>
        <div className="absolute top-2/3 right-1/5 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-second/25 animate-bounce-scale"></div>

        {/* Floating Squares */}
        <div className="absolute top-1/5 left-2/3 w-4 h-4 bg-third/20 rotate-45 animate-pulse-scale"></div>
        <div className="absolute bottom-1/5 right-1/4 w-5 h-5 bg-primary/25 rotate-45 animate-rotate-scale"></div>

        {/* Small decorative shapes */}
        <div className="absolute top-3/4 left-1/5 w-3 h-3 bg-second/35 rounded-full animate-float-scale"></div>
        <div className="absolute bottom-1/6 left-2/3 w-2 h-2 bg-primary/30 rounded-full animate-bounce-scale"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-third/25 rounded-full animate-pulse-scale"></div>
      </div>
    </div>
  );
};
export default Header;
