import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TfiArrowTopRight } from "react-icons/tfi";
import image1 from "../assets/Home/undraw_online-test_cqv0.svg";
import image2 from "../assets/Home/undraw_stripe-payments_jxnn.svg";
import image3 from "../assets/Home/undraw_web-app_141a.svg";
import looder from "../assets/Home/Frame 1618871548.png";
import { motion } from "framer-motion";
import { fadeIn } from "../Framermotion/Varient";

const ProfessionalCarousel = ({ items, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    resetTimer();
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    resetTimer();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    timerRef.current = setTimeout(goToNext, interval);

    return () => {
      resetTimer();
    };
  }, [currentIndex, isPaused]);

  return (
    <div
      className="relative bg-baseThree z-2 w-full h-[90vh] max-h-screen overflow-hidden lg:pt-20 md:pt-40 pt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Animated Floating Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {/* Circle 1 */}
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-primary/30 rounded-full animate-float-scale"></div>

        {/* Circle 2 */}
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-second/20 rounded-full animate-bounce-scale"></div>

        {/* Circle 3 */}
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-third/40 rounded-full animate-pulse-scale"></div>

        {/* Circle 4 */}
        <div className="absolute top-1/2 right-1/6 w-5 h-5 bg-primary/25 rounded-full animate-rotate-scale"></div>

        {/* Circle 5 */}
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-second/30 rounded-full animate-wave-scale"></div>

        {/* Circle 6 */}
        <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-third/35 rounded-full animate-float-scale"></div>

        {/* Circle 7 */}
        <div className="absolute bottom-1/2 left-1/6 w-6 h-6 bg-primary/20 rounded-full animate-bounce-scale"></div>
      </div>

      {/* Slides */}
      <div className="relative w-full h-full transition-transform duration-700 ease-in-out">
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={looder}
              alt=""
              className="absolute opacity-10 md:opacity-100 md:right-20 right-0 top-0 w-40 animate-spin z-5"
            />

            <div className="container mx-auto px-4 py-12 relative z-10">
              <div className="flex flex-col lg:flex-row items-center text-center md:text-left gap-8 lg:gap-12">
                {/* Text Section */}
                <motion.div
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0 }}
                  className="w-full lg:w-1/2 relative z-20"
                >
                  {item.paragraph && (
                    <h2 className="text-lg p-2 px-4 w-fit mx-auto md:mx-0 border border-base hover:bg-second hover:text-white transition-all duration-300 cursor-pointer rounded-full font-semibold mb-4 text-black leading-tight">
                      {item.paragraph}
                    </h2>
                  )}
                  {item.title && (
                    <h3 className="text-lg md:text-3xl lg:text-5xl font-bold mb-2 text-base">
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p className="text-lg md:text-3xl lg:text-5xl font-bold text-second mt-7 mb-6">
                      {item.description}
                    </p>
                  )}
                  {item.descriptionTwo && (
                    <p className="text-sm md:text-lg lg:text-xl font-semibold md:w-[520px] mx-auto md:mx-0 text-base mt-5 mb-6">
                      {item.descriptionTwo}
                    </p>
                  )}
                  {item.cta && (
                    <button
                      className="relative inline-block my-4 px-10 py-3 rounded-full text-center border-2 border-black 
            text-lg tracking-wider text-black no-underline font-bold
            cursor-pointer transition-all duration-500 ease-out
            shadow-[inset_0_0_0_0_#000]
            hover:text-white hover:shadow-[inset_0_-100px_0_0_#000]
            active:scale-90 z-30"
                    >
                      {item.cta}
                      <TfiArrowTopRight className="inline-block ml-2 text-xl" />
                    </button>
                  )}
                </motion.div>
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0 }}
                  className="w-full lg:w-1/2 relative z-10"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.alt || `Slide ${index + 1}`}
                      className="w-full h-auto md:max-h-[400px] max-h-[300px] object-contain rounded-xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Always Visible */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 shadow-lg bg-white text-black hover:bg-black hover:text-white transition duration-300"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 shadow-lg bg-white text-black hover:bg-black hover:text-white transition duration-300"
        aria-label="Next slide"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex
                ? "bg-second w-6"
                : "bg-primary hover:bg-second"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

// Example usage
const Slider = () => {
  const carouselItems = [
    {
      id: 1,
      image: image1,
      paragraph: "Welcome to Ecosyst",
      title: "Imagination and inspiration",
      description: " to achieve perfection",
      cta: "View Projects",
      descriptionTwo:
        "We are a team of designers, developers, and marketers who are passionate about creating beautiful and functional websites.",
    },
    {
      id: 2,
      image: image2,
      paragraph: "Welcome to Ecosyst",
      title: "Imagination and inspiration",
      description: " to achieve perfection",
      cta: "View Projects",
      descriptionTwo:
        "We are a team of designers, developers, and marketers who are passionate about creating beautiful and functional websites.",
    },
    {
      id: 3,
      image: image3,
      paragraph: "Welcome to Ecosyst",
      title: "Imagination and inspiration",
      description: " to achieve perfection",
      cta: "View Projects",
      descriptionTwo:
        "Provide a brief overview of your SaaS product, explaining what it does and how it can benefit the user.",
    },
  ];

  return (
    <div className="bg-secondary">
      <ProfessionalCarousel
        items={carouselItems}
        autoPlay={true}
        interval={6000}
      />
    </div>
  );
};

export default Slider;