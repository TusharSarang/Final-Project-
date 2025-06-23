import React, { useState } from 'react';

const RepoCard = ({ repo, bookmarks, setBookmarks }) => {
  const [note, setNote] = useState('');

  const toggleBookmark = () => {
    const updated = bookmarks.some(b => b.id === repo.id)
      ? bookmarks.filter(b => b.id !== repo.id)
      : [...bookmarks, { ...repo, note }];
    setBookmarks(updated);
    localStorage.setItem('bookmarked', JSON.stringify(updated));
  };

  return (
    <div className="border rounded p-4 shadow">
      <h3 className="text-lg font-bold">{repo.full_name}</h3>
      <p>{repo.description}</p>
      <p><strong>⭐</strong> {repo.stargazers_count}</p>
      <p><strong>Language:</strong> {repo.language}</p>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add note..."
        className="w-full mt-2 border rounded p-1 text-sm"
      />
      <button
        onClick={toggleBookmark}
        className="mt-2 px-2 py-1 bg-blue-500 text-white rounded"
      >
        {bookmarks.some(b => b.id === repo.id) ? 'Remove Bookmark' : 'Bookmark'}
      </button>
    </div>
  );
};

export default RepoCard;