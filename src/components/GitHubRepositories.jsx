import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCodeBranch, FaRegFolder, FaStar } from "react-icons/fa";

import { handleSpotlight } from "../utils/spotlight";
import "../styles/GitHubRepositories.css";

const GITHUB_USERNAME = "dgdasun";

function GitHubRepositories() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    )
      .then((res) => res.json())
      // A rate-limited response is an error object, not an array
      .then((data) => setRepos(Array.isArray(data) ? data : []))
      .catch((err) => console.error(err));
  }, []);

  if (repos.length === 0) return null;

  return (
    <section className="repositories" id="repositories">
      <div className="container">
        <div className="repositories-heading">
          <h3>Recently updated repositories</h3>

          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            View all
            <FaArrowRight />
          </a>
        </div>

        <div className="repositories-grid">
          {repos.map((repo, index) => (
            <motion.a
              className="card repo-card"
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              onMouseMove={handleSpotlight}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="repo-top">
                <FaRegFolder className="repo-folder" />
                <FaArrowRight className="repo-arrow" />
              </div>

              <h4>{repo.name}</h4>

              <p>{repo.description || "No description available."}</p>

              <div className="repo-info">
                <span className="repo-language">
                  <span className="language-dot" />
                  {repo.language || "Unknown"}
                </span>

                <span>
                  <FaStar />
                  {repo.stargazers_count}
                </span>

                <span>
                  <FaCodeBranch />
                  {repo.forks_count}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GitHubRepositories;
