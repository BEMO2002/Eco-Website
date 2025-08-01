import React, { useState } from "react";
import {
  FaEnvelope,
  FaRocket,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo2 from "../assets/Home/Frame 1618871548.png";
import imageForm from "../assets/contact/form.jpg";
import shape from "../assets/Projects/تصميم بدون عنوان (64) 1.png";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    businessField: "",
  });
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = ["Mobile App", "Desktop App", "Website"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setFormData((prev) => ({
      ...prev,
      businessField: service,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phoneNumber || !formData.businessField) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("businessField", formData.businessField);

      const response = await fetch(
        "https://ecosysstem.runasp.net/api/ContactForm",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();

      if (result.statusCode === 200) {
        toast.success("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", phoneNumber: "", businessField: "" });
        setSelectedService("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
        <div className="min-h-screen  py-30 px-4 relative">
                  <img
        src={shape}
        alt=""
        className="absolute top-30  left-0  hidden md:block"
      />
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
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-4">
            Contact Us
          </h1>
        </div>

        {/* Main Content Container */}
        <div className="bg-base rounded-3xl p-4 md:p-8 relative overflow-hidden w-full max-w-[1190px] h-auto min-h-[400px] md:h-[570px] mx-auto flex items-center justify-center border border-green-500/20 shadow-[0_0_80px_rgba(34,197,94,0.3)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10 w-full max-w-5xl p-4 md:p-0">
            {/* Contact Form */}

            <div className="space-y-6 md:space-y-8 relative w-full h-full p-4 md:p-0">
              {/* Background Image - Left Half Only */}
              <div className="absolute inset-0 -z-10 w-full h-full">
                <img
                  src={imageForm}
                  alt=""
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gray-900/50"></div>
              </div>
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full h-[45px] md:h-[50px] py-3 md:py-4 px-3 md:px-4 border border-white rounded-lg md:rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors  md:text-lg"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div className="relative">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full h-[45px] md:h-[50px] py-3 md:py-4 px-3 md:px-4 border border-white rounded-lg md:rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors  md:text-lg pr-12 md:pr-16"
                  placeholder="Enter Your Email"
                  required
                />
                <FaEnvelope className="absolute right-3 md:right-6 top-1/2 transform -translate-y-1/2 text-white text-lg md:text-xl" />
              </div>

              {/* Service Selection */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceSelect(service)}
                      className={`px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border-2 transition-all duration-300 text-white font-medium text-sm  ${
                        selectedService === service
                          ? "border-green-500 bg-green-500"
                          : "border-white "
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full bg-green-500 h-[45px] md:h-[50px] text-white py-3 md:py-4 px-4 rounded-lg md:rounded-xl font-bold text-sm md:text-xl flex items-center justify-center gap-3 md:gap-4 hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaRocket className="text-2xl" />
                    Let's grow your business
                  </>
                )}
              </button>
            </div>

            {/* Branding Section */}
            <div className="text-center mx-auto lg:text-left relative z-10 p-4 md:p-0">
              {/* Logo */}
              <div className="mb-8 md:mb-12">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto lg:mx-0 mb-6 md:mb-8">
                  {/* Circuit board logo */}
                  <img
                    src={logo2}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  ECOSYST
                </h2>
              </div>

              {/* Social Media */}
              <div className="flex justify-center lg:justify-start gap-4 md:gap-6">
                <a
                  href="https://www.linkedin.com/company/ecosyst220/"
                  className="text-white hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl md:text-3xl" />
                </a>
                <a
                  href="https://wa.me/201044847442"
                  className="text-white hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-2xl md:text-3xl" />
                </a>
                <a
                  href="https://github.com"
                  className="text-white hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl md:text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com/share/16hSNfdLRG/"
                  className="text-white hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl md:text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ContactForm;
