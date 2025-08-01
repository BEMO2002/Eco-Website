import React from "react";
import { FaDesktop, FaMobile, FaGlobe } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaDesktop className="w-8 h-8" />,
      title: "Desktop Application",
      description:
        "Our talented and experienced team of designers, developers and business Whatever you require, can develop it",
    },
    {
      id: 2,
      icon: <FaMobile className="w-8 h-8" />,
      title: "Mobile Application",
      description:
        "We create targeted strategies so your video content speaks to the right audience in the right way",
    },
    {
      id: 3,
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Website",
      description:
        "We design brochures, catalogs and other marketing collateral",
    },
  ];

  return (
    <div className="container mx-auto py-20 px-4 relative overflow-hidden">
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

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-base mb-4">Our Services</h2>
        <p className="text-lg text-baseTwo max-w-2xl mx-auto">
          We provide comprehensive digital solutions to help your business grow
          and succeed in the digital world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {services.map((service) => (
          <div key={service.id} className="relative group">
            {/* Service Card */}
            <div className="relative bg-primary rounded-2xl p-8 h-80 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
              {/* Animated Waves */}
              <div className="wave wave-1"></div>
              <div className="wave wave-2"></div>
              <div className="wave wave-3"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                {/* Icon */}
                <div className="mb-6 text-white">{service.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-second/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .wave {
          position: absolute;
          width: 540px;
          height: 700px;
          opacity: 0.6;
          left: 0;
          top: 0;
          margin-left: -50%;
          margin-top: -70%;
          background: linear-gradient(744deg, #1ed891, #0b4c33 60%, #17a26d);
          border-radius: 40%;
        }

        .wave-1 {
          animation: wave 3000ms infinite linear;
        }

        .wave-2 {
          top: 210px;
          animation: wave 4000ms infinite linear;
        }

        .wave-3 {
          top: 210px;
          animation: wave 5000ms infinite linear;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
