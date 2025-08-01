import React from "react";
import {
  FaBullhorn,
  FaSearch,
  FaChartPie,
  FaNetworkWired,
  FaMobile,
  FaChartBar,
  FaEnvelope,
  FaShieldAlt,
} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

const ServicesTwo = () => {
  const services = [
    {
      id: 1,
      icon: <FaBullhorn className="w-8 h-8" />,
      title: "Social Media Management",
      description:
        "Build your presence. Engage your audience. Grow your brand.",
    },
    {
      id: 2,
      icon: <FaSearch className="w-8 h-8" />,
      title: "Media Buying",
      description: "Create memorable digital campaigns from scratch",
    },
    {
      id: 3,
      icon: <FaChartPie className="w-8 h-8" />,
      title: "Social Ads",
      description:
        "Targeted ad campaigns across the Meta network, Google and more.",
    },
    {
      id: 4,
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: "Web Development",
      description: "Build a website that works as hard as you do",
    },
    {
      id: 5,
      icon: <FaSearch className="w-8 h-8" />,
      title: "SEO Optimization",
      description:
        "The process of developing websites to suit the requirements of different search engines",
    },
    {
      id: 6,
      icon: <FaMobile className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "Create the perfect mobile app with the professional app developers at PROMPTECH",
    },
    {
      id: 7,
      icon: <FaChartBar className="w-8 h-8" />,
      title: "Media Production",
      description:
        "media production services include video production, audio production, and more",
    },
    {
      id: 8,
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Email Marketing",
      description:
        "Email marketing is a powerful tool for building relationships with customers, promoting products",
    },
    {
      id: 9,
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Cybersecurity Services",
      description:
        "Protect your digital assets with comprehensive security solutions including penetration testing, vulnerability assessment,",
    },
  ];

  return (
    <div className="container mx-auto py-30 px-4">
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
      </div>{" "}
      <div className="text-center mb-4">
        <h2 className="font-bol mx-auto text-lg p-2 px-6 bg-second text-white w-fit rounded-full md:text-3xl  mb-4">
          Our Services
        </h2>
        <h2 className="text-xl font-bold text-base mb-2">
          Stay Ahead Of The Competition With Our Advanced SEO Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service) => (
          <div key={service.id} className="group cursor-pointer">
            {/* Service Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Icon Container */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                  <div className="text-second transition-transform duration-300 group-hover:rotate-360">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-base mb-3 text-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Read More Button */}
              <div className="text-center">
                <a
                  href="#"
                  className="text-base font-medium underline hover:text-primary transition-colors inline-flex items-center"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesTwo;
