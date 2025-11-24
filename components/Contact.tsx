import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-foreground dark:text-dark-foreground">
          Let&apos;s connect
        </h2>

        <p className="text-lg text-secondary dark:text-dark-secondary mb-8">
          Feel free to reach out on any of these platforms:
        </p>

        {/* Social Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-accent dark:hover:border-dark-accent transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-accent dark:hover:border-dark-accent transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-accent dark:hover:border-dark-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-secondary dark:text-dark-secondary">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>{personalInfo.email}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
