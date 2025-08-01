import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import shape1 from '../assets/Team/Ellipse 48.svg'
import shape2 from '../assets/Team/Ellipse 49.svg'
import shape from '../assets/Projects/تصميم بدون عنوان (64) 1.png'
const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(
          "https://ecosysstem.runasp.net/api/Team"
        );
        if (response.data.statusCode === 200) {
          setTeamMembers(response.data.data);
        } else {
          setError("Failed to fetch team members");
        }
      } catch (err) {
        setError("Error fetching team members: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-second"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-red-500 text-center">
          <p className="text-lg font-semibold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-16 px-4 relative">
              <img
        src={shape}
        alt=""
        className="absolute bottom-7  left-0  hidden md:block"
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600">
            Meet the experts behind our success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30">
          {teamMembers.map((member) => (
            <div key={member.id} className="relative group">
              {/* Team Member Card */}
              <div className="bg-[#17A26D] rounded-[24px] p-10 pt-16 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                {/* Decorative Corner Shapes */}
                <img src={shape2} alt="" className="absolute bottom-0 left-0" />
                <img src={shape1} alt="" className="absolute top-0 right-0" />

                {/* Profile Picture */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                    <img
                      src={member.attachment}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDgiIGN5PSI0OCIgcj0iNDgiIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSI0OCIgY3k9IjM2IiByPSIxOCIgZmlsbD0iI2NjYyIvPjxwYXRoIGQ9Ik00OCA2MGMtMTMgMC0yNCA4LTI0IDE4djZoNDh2LTZjMC0xMC0xMS0xOC0yNC0xOHoiIGZpbGw9IiNjY2MiLz48L3N2Zz4=";
                      }}
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center text-white">
                  <h3 className="text-lg font-bold mb-2 mt-2">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.position}</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 mt-6">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                  >
                    <FaLinkedin className="text-white text-lg" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                  >
                    <FaGithub className="text-white text-lg" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
