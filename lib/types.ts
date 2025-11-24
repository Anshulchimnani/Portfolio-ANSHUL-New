export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    language: string | null;
    updated_at: string;
    fork: boolean;
    topics: string[];
}

export interface Project {
    name: string;
    description: string;
    stars: number;
    language: string;
    url: string;
    updatedAt: string;
}

export interface Skill {
    icon: string;
    title: string;
    description: string;
}

export interface Metric {
    value: string;
    label: string;
}
