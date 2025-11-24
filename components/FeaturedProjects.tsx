import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { fetchFeaturedProjects } from "@/lib/github";
import { featuredProjects } from "@/lib/data";

export default async function FeaturedProjects() {
    const projects = await fetchFeaturedProjects(featuredProjects);

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-container mx-auto">
                <h2 className="text-3xl font-semibold mb-12 text-foreground dark:text-dark-foreground">
                    Featured projects
                </h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <ProjectCard key={project.name} project={project} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 text-secondary dark:text-dark-secondary">
                            <p>Unable to load projects. Please check back later.</p>
                        </div>
                    )}
                </div>

                {/* See All Projects Link */}
                <div className="text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-accent dark:text-dark-accent hover:underline"
                    >
                        <span>See all projects</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
