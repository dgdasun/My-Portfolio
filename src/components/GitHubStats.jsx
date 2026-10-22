import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBook,
  FaGithub,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";

import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "../utils/spotlight";
import "../styles/GitHubStats.css";

const GITHUB_USERNAME = "dgdasun";

function GitHubStats() {
  const [user, setUser] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => {
        console.error(err);
        setFailed(true);
      });
  }, []);

  const stats = user
    ? [
        { icon: <FaGithub />, value: user.public_repos, label: "Repositories" },
        { icon: <FaUsers />, value: user.followers, label: "Followers" },
        { icon: <FaUserFriends />, value: user.following, label: "Following" },
        { icon: <FaBook />, value: user.public_gists, label: "Public Gists" },
      ]
    : [];

  return (
    <section className="section github" id="github">
      <div className="container">
        <SectionHeading
          eyebrow="GitHub"
          title="Open source activity"
          description="Live data pulled from my GitHub profile."
        />

        {failed && (
          <p className="github-fallback">
            GitHub statistics are unavailable right now.{" "}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
            >
              Visit my profile →
            </a>
          </p>
        )}

        {!user && !failed && (
          <div className="github-layout" aria-busy="true">
            <div className="card github-profile skeleton" />
            <div className="stats-grid">
              {[0, 1, 2, 3].map((item) => (
                <div className="card stat-box skeleton" key={item} />
              ))}
            </div>
          </div>
        )}

        {user && (
          <motion.div
            className="github-layout"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card github-profile" onMouseMove={handleSpotlight}>
              <img src={user.avatar_url} alt={user.login} />

              <div>
                <h3>{user.name || user.login}</h3>
                <span className="github-handle">@{user.login}</span>
              </div>

              {user.bio && <p>{user.bio}</p>}

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <FaGithub />
                Follow on GitHub
                <FaArrowRight />
              </a>
            </div>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div
                  className="card stat-box"
                  key={stat.label}
                  onMouseMove={handleSpotlight}
                >
                  <span className="stat-box-icon">{stat.icon}</span>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default GitHubStats;
