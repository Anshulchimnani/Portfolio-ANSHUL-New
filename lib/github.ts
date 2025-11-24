import { GitHubRepo, Project } from "./types";

const GITHUB_USERNAME = "Anshulchimnani";
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export async function fetchGitHubRepos(): Promise<Project[]> {
    try {
        const response = await fetch(GITHUB_API_URL, {
            headers: {
                Accept: "application/vnd.github.v3+json",
                // Add GitHub token if available for higher rate limits
                ...(process.env.GITHUB_TOKEN && {
                    Authorization: `token ${process.env.GITHUB_TOKEN}`,
                }),
            },
            next: {
                revalidate: 3600, // Revalidate every hour (ISR)
            },
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos: GitHubRepo[] = await response.json();

        // Filter out forked repos and map to our Project type
        const projects: Project[] = repos
            .filter((repo) => !repo.fork)
            .map((repo) => ({
                name: repo.name,
                description: repo.description || "No description available",
                stars: repo.stargazers_count,
                language: repo.language || "Unknown",
                url: repo.html_url,
                updatedAt: repo.updated_at,
            }))
            .sort((a, b) => b.stars - a.stars); // Sort by stars descending

        return projects;
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        return [];
    }
}

export async function fetchFeaturedProjects(
    featuredRepoNames: string[]
): Promise<Project[]> {
    const allProjects = await fetchGitHubRepos();

    // Filter to only featured projects and maintain the order
    const featured = featuredRepoNames
        .map((name) => allProjects.find((project) => project.name === name))
        .filter((project): project is Project => project !== undefined);

    return featured;
}

export function filterProjectsByCategory(
    projects: Project[],
    category: string
): Project[] {
    if (category === "All") return projects;

    const categoryKeywords: { [key: string]: string[] } = {
        ML: ["machine", "learning", "prediction", "model", "regression"],
        "Data Analysis": ["analysis", "statistical", "visualization", "analytics"],
        "Web Dev": ["django", "web", "app", "scraping", "scrapping"],
        NLP: ["sentiment", "nlp", "text", "word", "cloud"],
    };

    const keywords = categoryKeywords[category] || [];

    return projects.filter((project) => {
        const searchText = `${project.name} ${project.description}`.toLowerCase();
        return keywords.some((keyword) => searchText.includes(keyword));
    });
}

export function searchProjects(projects: Project[], query: string): Project[] {
    if (!query) return projects;

    const lowerQuery = query.toLowerCase();
    return projects.filter((project) => {
        const searchText = `${project.name} ${project.description} ${project.language}`.toLowerCase();
        return searchText.includes(lowerQuery);
    });
}
