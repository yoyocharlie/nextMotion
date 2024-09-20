import { useState, useEffect, useMemo } from "react";
import { IoLogoGithub } from "react-icons/io";

export function useGitHubRepoData(
  owner: string | undefined,
  repo: string | undefined,
) {
  const [repoData, setRepoData] = useState<{
    url: string;
    starCount: number;
  } | null>(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      if (!owner || !repo) return;
      const data = await getRepoStars(owner, repo);
      setRepoData(data);
    };

    void fetchRepoData();
  }, [owner, repo]);

  return useMemo(
    () => ({
      url: repoData?.url ?? "",
      starCount: repoData?.starCount ?? 0,
      repoName: repo,
      icon: <IoLogoGithub size={20} />,
    }),
    [repo, repoData],
  );
}

interface GitHubRepoData {
  stargazers_count: number;
  html_url: string;
  message?: string; // error message, if any
}

async function getRepoStars(
  owner: string,
  repo: string,
): Promise<{ url: string; starCount: number }> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
    );
    const data: GitHubRepoData = await response.json();

    if (response.ok) {
      return { url: data.html_url, starCount: data.stargazers_count };
    } else {
      console.error("Error fetching repo data:", data.message);
      return { url: "", starCount: 0 };
    }
  } catch (error) {
    console.error("Network or API error:", error);
    return { url: "", starCount: 0 };
  }
}
