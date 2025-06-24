import { useState, useEffect } from 'react';
import Card from './Card';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filtered = posts.filter(p => p.title.includes(query));

  return (
    <div className="p-4">
      <input
        className="border p-2 mb-4 w-full rounded"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p className="text-center text-xl">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(post => (
          <Card key={post.id} title={post.title}>
            <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Posts;
