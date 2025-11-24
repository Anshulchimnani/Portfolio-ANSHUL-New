import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-container mx-auto text-center">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800">
            <Image
              src="/profile.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground dark:text-dark-foreground">
          Hi, I&apos;m {personalInfo.name}
        </h1>

        {/* Bio */}
        <p className="text-lg md:text-xl text-secondary dark:text-dark-secondary max-w-3xl mx-auto mb-6 leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* Location */}
        <p className="text-secondary dark:text-dark-secondary mb-8">
          Currently based in {personalInfo.location}
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
