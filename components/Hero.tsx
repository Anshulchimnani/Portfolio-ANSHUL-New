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
          {/* Profile Photo */}
          <div className="mb-8 relative w-32 h-32 rounded-full overflow-hidden border-4 border-electric-blue/30 shadow-[0_0_20px_rgba(79,172,254,0.3)]">
            <Image
              src="/profile.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-electric-blue mb-6">
            {personalInfo.title}
          </h2>

          {/* Bio */}
          <p className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Location */}
          <p className="text-gray-400 mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
            Based in {personalInfo.location}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105 hover:border-electric-blue/50 group"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 text-gray-400 group-hover:text-electric-blue transition-colors" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105 hover:border-electric-blue/50 group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-gray-400 group-hover:text-electric-blue transition-colors" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105 hover:border-electric-blue/50 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-electric-blue transition-colors" />
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
