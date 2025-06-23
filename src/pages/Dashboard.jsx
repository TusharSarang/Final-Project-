import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RepoCard from '../components/RepoCard';
import ChartPanel from '../components/ChartPanel';
import BookmarkPanel from '../components/BookmarkPanel';

const Dashboard = () => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState('');
  const [language, setLanguage] = useState('');
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem('bookmarked')) || []
  );

  const fetchRepos = async () => {
    const response = await axios.get('https://api.github.com/search/repositories', {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
      },
      params: {
        q: `stars:>500 ${search} ${language ? 'language:' + language : ''}`,
        sort: 'stars',
        order: 'desc',
        per_page: 20
      }
    });
    setRepos(response.data.items);
  };

  useEffect(() => {
    fetchRepos();
  }, [search, language]);

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-2 py-1 rounded w-1/3"
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="">All Languages</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} bookmarks={bookmarks} setBookmarks={setBookmarks} />
        ))}
      </div>

      <ChartPanel data={repos} />
      <BookmarkPanel bookmarks={bookmarks} />
    </div>
  );
};

export default Dashboard;