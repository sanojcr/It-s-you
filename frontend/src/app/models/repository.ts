export interface RepoOwner {
    avatar_url: string;
}

export interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    created_at: string;
    topics: string[];
    url: string;
    owner: RepoOwner;
}

