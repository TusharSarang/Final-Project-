import React from 'react';

const BookmarkPanel = ({ bookmarks }) => (
  <div className="mt-6">
    <h2 className="text-xl font-semibold mb-2">Bookmarked Repositories</h2>
    {bookmarks.length === 0 ? <p>No bookmarks yet.</p> : (
      <ul className="list-disc pl-5">
        {bookmarks.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {repo.full_name}
            </a>: <span className="italic">{repo.note || 'No note'}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default BookmarkPanel;