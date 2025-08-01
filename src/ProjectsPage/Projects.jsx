import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFigma, FaReact, FaMobile } from "react-icons/fa";
import shape from "../assets/Projects/تصميم بدون عنوان (64) 1.png";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://ecosysstem.runasp.net/api/Service"
        );
        if (response.data.statusCode === 200) {
          setProjects(response.data.data.items);
        } else {
          setError("Failed to fetch projects");
        }
      } catch (err) {
        setError("Error fetching projects: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-second "></div>
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
    <div className="min-h-screen   py-16 px-4 relative">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-tr  from-[#1ED891] via-[#ffffff11] to-[#1ED891] rounded-[48px] border-2 border-green-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-tr from-[#1ED891] via-[#ffffff11] to-[#1ED891]  p-4 pt-5 ">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-base">
                    {project.name}
                  </span>
                  <div className="flex bg-white rounded-full p-2 gap-2">
                    <FaFigma className="text-pink-500 text-lg" />
                    <FaReact className="text-blue-500 text-lg" />
                    <FaMobile className="text-gray-600 text-lg" />
                  </div>
                </div>
              </div>

              {/* Project Image */}
              <div className="p-4">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.attachment}
                    alt={project.name}
                    className="w-full h-48 object-cover filter "
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YWFhYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 "></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="px-4 pb-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.categoryName}
                </p>

                {/* Go to Website Button */}
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-0 w-full bg-[#1ED891] shadow-md text-base text-center py-3 px-4 font-medium transition-all duration-300"
                  style={{ borderRadius: "16px 16px 40px 40px" }}
                >
                  Go to Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
