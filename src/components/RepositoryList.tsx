import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";
import { useState, useEffect } from "react";

interface Repo {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/MendesVitor/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repos.map((repository) => (
          <RepositoryItem key={repository.name} repo={repository} />
        ))}
      </ul>
    </section>
  );
}
