import React, { useEffect, useState } from "react";

const loadJson = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export default function GithubUser({ login = "om202" }) {
  const [data, setData] = useState(loadJson(`user:${login}`));
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!login) return;
    setLoading(true)
    if(data && data.login === login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => setError(err));
  }, [login]);

  useEffect(() => {
    if (!data) return;
    if (data.login === login) return;
    const { name, avatar_url, location } = data;
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [data]);

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  if(loading) return <pre><h1>Loading...</h1></pre>

  if(error) return <pre><h1>Error</h1>{error}</pre>

  return null;
}
