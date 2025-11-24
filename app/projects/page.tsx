"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/lib/types";

const categories = ["All", "ML", "Data Analysis", "Web Dev", "NLP"];

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch("/api/projects");
                const data = await response.json();
                setProjects(data);
                setFilteredProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    useEffect(() => {
        let filtered = projects;

        // Filter by category
        if (selectedCategory !== "All") {
            const categoryKeywords: { [key: string]: string[] } = {
                ML: ["machine", "learning", "prediction", "model", "regression"],
                "Data Analysis": [
                    "analysis",
                    "statistical",
                    "visualization",
                    "analytics",
                ],
                "Web Dev": ["django", "web", "app", "scraping", "scrapping"],
                NLP: ["sentiment", "nlp", "text", "word", "cloud"],
            };

            const keywords = categoryKeywords[selectedCategory] || [];
            filtered = filtered.filter((project) => {
                const searchText =
                    `${project.name} ${project.description}`.toLowerCase();
                return keywords.some((keyword) => searchText.includes(keyword));
            });
        }

        // Filter by search query
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            filtered = filtered.filter((project) => {
                const searchText =
                    `${project.name} ${project.description} ${project.language}`.toLowerCase();
                return searchText.includes(lowerQuery);
            });
        }

        setFilteredProjects(filtered);
    }, [selectedCategory, searchQuery, projects]);

    return (
        <>
            <Header />
            <main className="pt-24 pb-20 px-6 min-h-screen">
                <div className="max-w-container mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-accent dark:text-dark-accent hover:underline mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to home</span>
                    </Link>

                    {/* Header */}
                    <h1 className="text-4xl font-semibold mb-4 text-foreground dark:text-dark-foreground">
                        All Projects
                    </h1>
                    <p className="text-lg text-secondary dark:text-dark-secondary mb-8">
                        Explore all my data science and machine learning projects from
                        GitHub.
                    </p>

                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary dark:text-dark-secondary" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-foreground dark:text-dark-foreground focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent"
                            />
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg transition-colors ${selectedCategory === category
                                        ? "bg-accent dark:bg-dark-accent text-white"
                                        : "bg-gray-100 dark:bg-gray-800 text-secondary dark:text-dark-secondary hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    {loading ? (
                        <div className="text-center py-12 text-secondary dark:text-dark-secondary">
                            <p>Loading projects...</p>
                        </div>
                    ) : filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.name} project={project} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-secondary dark:text-dark-secondary">
                            <p>No projects found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
