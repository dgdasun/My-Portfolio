import { useEffect, useState } from "react";
import {
  FaGithub,
  FaBook,
  FaUsers,
  FaUserFriends,
} from "react-icons/fa";

import "../styles/GitHubStats.css";

function GitHubStats() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/dgdasun")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  if (!user) {
    return (
      <section className="github">
        <div className="github-container">
          <h2>Loading GitHub Statistics...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="github" id="github">
      <div className="github-container">

        <div className="github-heading">
          <p>GITHUB</p>
          <h2>GitHub Statistics</h2>
          <span>Live data from my GitHub profile</span>
        </div>

        <div className="stats-grid">

          <div className="stat-box">
            <FaGithub className="stat-icon" />
            <h3>{user.public_repos}</h3>
            <p>Repositories</p>
          </div>

          <div className="stat-box">
            <FaUsers className="stat-icon" />
            <h3>{user.followers}</h3>
            <p>Followers</p>
          </div>

          <div className="stat-box">
            <FaUserFriends className="stat-icon" />
            <h3>{user.following}</h3>
            <p>Following</p>
          </div>

          <div className="stat-box">
            <FaBook className="stat-icon" />
            <h3>{user.public_gists}</h3>
            <p>Public Gists</p>
          </div>

        </div>

        <div className="github-profile">

          <img
            src={user.avatar_url}
            alt={user.login}
          />

          <div>

            <h3>{user.name}</h3>

            <p>{user.bio}</p>

            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default GitHubStats;