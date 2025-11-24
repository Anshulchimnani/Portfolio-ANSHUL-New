import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:border-accent dark:hover:border-dark-accent transition-all duration-200 group"
        >
            {/* Header with Stars and Language */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-sm text-secondary dark:text-dark-secondary">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{project.stars}</span>
                </div>
                {project.language && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-secondary dark:text-dark-secondary">
                        {project.language}
                    </span>
                )}
            </div>

            {/* Project Name */}
            <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-dark-foreground group-hover:text-accent dark:group-hover:text-dark-accent transition-colors">
                {project.name.replace(/-/g, " ")}
            </h3>

            {/* Description */}
            <p className="text-secondary dark:text-dark-secondary mb-4 line-clamp-2">
                {project.description}
            </p>

            {/* View on GitHub Link */}
            <div className="flex items-center gap-2 text-sm text-accent dark:text-dark-accent">
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
            </div>
        </a>
    );
}
