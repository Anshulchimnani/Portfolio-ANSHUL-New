import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10 pt-20 md:pt-0">
          {/* Profile Photo - Updated to Rectangle with 3D touch */}
          <div className="mb-10 relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] transform hover:scale-105 transition-transform duration-500">
            <Image
              src="/profile.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#1a1a1a] tracking-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
            {personalInfo.title}
          </h2>

          {/* Bio */}
          <p className="text-lg text-[#1a1a1a] max-w-xl mb-8 leading-relaxed font-medium">
            {personalInfo.bio}
          </p>

          {/* Location */}
          <p className="text-gray-600 mb-8 flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Based in {personalInfo.location}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-all hover:scale-105 group"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 text-[#1a1a1a] transition-colors" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-all hover:scale-105 group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-[#1a1a1a] transition-colors" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-all hover:scale-105 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-[#1a1a1a] transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Side: Empty for Animation */}
        <div className="w-full md:w-1/2 h-full min-h-[50vh] md:min-h-screen pointer-events-none">
          {/* The NeuralNetworkBackground component covers this area */}
        </div>
      </div>
    </section>
  );
}
