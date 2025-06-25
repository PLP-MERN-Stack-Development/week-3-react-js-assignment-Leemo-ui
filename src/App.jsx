import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dark">
      <Layout>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
              {/* Counter Example */}
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 mb-6">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-lg mb-4">
                    Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
                  </p>
                  <div className="flex items-center gap-4 my-4">
                    <button
                      onClick={() => setCount((count) => count - 1)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-xl font-bold">{count}</span>
                    <button
                      onClick={() => setCount((count) => count + 1)}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-4">
                    Implement your TaskManager component here
                  </p>
                </div>
              </div>

              {/* TaskManager */}
              <TaskManager />

              {/* API Data Section */}
              <div className="bg-gray-100 p-4 rounded shadow my-6">
                <h3 className="text-lg font-medium mb-2">API Data</h3>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <ul className="space-y-2">
                    {posts.slice(0, 5).map((item) => (
                      <li key={item.id} className="p-3 bg-white rounded shadow">
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;