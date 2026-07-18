import { useEffect, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

import "../styles/GitHubRepositories.css";

function GitHubRepositories() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/dgdasun/repos?sort=updated&per_page=6"
    )
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="repositories" id="repositories">
      <div className="repositories-container">
        <div className="repositories-heading">
          <p>MY WORK</p>

          <h2>Latest GitHub Projects</h2>

          <span>
            These repositories are loaded directly from my GitHub profile.
          </span>
        </div>

        <div className="repositories-grid">
          {repos.map((repo) => (
            <div className="repo-card" key={repo.id}>
              <h3>{repo.name}</h3>

              <p>{repo.description || "No description available."}</p>

              <div className="repo-info">
                <span>
                  <FaStar />
                  {repo.stargazers_count}
                </span>

                <span>
                  <FaCodeBranch />
                  {repo.default_branch}
                </span>
              </div>

              <div className="repo-language">
                {repo.language || "Unknown"}
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GitHubRepositories;