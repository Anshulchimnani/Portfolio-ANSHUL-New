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
          <div className="mb-10 relative w-44 h-44 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.3)] transform hover:scale-105 transition-transform duration-500 border-2 border-cyan-500/30">
            <Image
              src="/profile.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-cyan-400 tracking-tight drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-cyan-200 mb-6">
            {personalInfo.title}
          </h2>

          {/* Bio */}
          <p className="text-lg text-cyan-100/80 max-w-xl mb-8 leading-relaxed font-medium">
            {personalInfo.bio}
          </p>

          {/* Location */}
          <p className="text-cyan-300 mb-8 flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
            Based in {personalInfo.location}
          </p>

        </div>

        {/* Right Side: Empty for Animation */}
        <div className="w-full md:w-1/2 h-full min-h-[50vh] md:min-h-screen pointer-events-none">
          {/* The NeuralNetworkBackground component covers this area */}
        </div>
      </div>
    </section>
  );
}
