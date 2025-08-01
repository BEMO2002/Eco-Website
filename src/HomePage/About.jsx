import React from "react";
import AboutTwoImage from "../assets/Home/about.svg";

const AboutTwo = () => {
  return (
    <div className="container mx-auto mt-20 flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12 relative overflow-hidden">
      {/* Animated Shapes Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Triangle 1 */}
        <div className="absolute top-1/4 left-1/6 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-primary/20 animate-float-scale"></div>

        {/* Triangle 2 */}
        <div className="absolute top-1/3 right-1/4 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-second/30 animate-bounce-scale"></div>

        {/* Square 1 */}
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-third/25 rotate-45 animate-rotate-scale"></div>

        {/* Square 2 */}
        <div className="absolute top-1/2 right-1/6 w-6 h-6 bg-primary/20 rotate-45 animate-pulse-scale"></div>

        {/* Circle 1 */}
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-second/30 rounded-full animate-wave-scale"></div>

        {/* Circle 2 */}
        <div className="absolute top-2/3 left-1/4 w-4 h-4 bg-third/35 rounded-full animate-float-scale"></div>

        {/* Diamond 1 */}
        <div className="absolute bottom-1/2 left-1/6 w-6 h-6 bg-primary/15 rotate-45 animate-bounce-scale"></div>

        {/* Diamond 2 */}
        <div className="absolute top-1/6 right-1/3 w-5 h-5 bg-second/25 rotate-45 animate-pulse-scale"></div>

        {/* Hexagon */}
        <div
          className="absolute bottom-1/6 right-1/6 w-8 h-8 bg-third/20 animate-rotate-scale"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        ></div>

        {/* Star */}
        <div
          className="absolute top-1/5 left-1/2 w-6 h-6 bg-primary/30 animate-wave-scale"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        ></div>
      </div>

      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0 relative z-10">
        <img
          src={AboutTwoImage}
          alt="About Two"
          className=" rounded-lg  object-cover md:w-[500px] md:h-[500px] w-full h-full "
        />
      </div>
      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal relative z-10">
        <h2 className="font-bold text-lg p-2 px-6 bg-second text-white w-fit rounded-full md:text-3xl  mb-4">
          About Us
        </h2>
        <p className="mb-5 leading-relaxed ">
          For more than 3 years,{" "}
          <span className="text-base font-bold">ECO</span>
          <span className="text-second font-bold">SYST</span> We assist industry
          and government leaders in developing and deploying these technological
          solutions. These partnerships reflect the body of work generated by
          ECOSYST, driven by the latest tools and technologies.
        </p>
        <p className="leading-relaxed ">
          <span className="text-base font-bold">ECO</span>
          <span className="text-second font-bold">SYST</span> tends to your
          marketing and advertising needs by creating compelling content and
          outstanding branding that conveys your remarkable story and echoes
          your brand identity in memorable ways. Our Digital Agency Services in
          Egypt connects you to new markets, clients,
        </p>
      </div>
    </div>
  );
};

export default AboutTwo;
