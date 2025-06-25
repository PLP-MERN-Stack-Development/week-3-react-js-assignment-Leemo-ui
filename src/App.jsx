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
              {/* Navbar component will go here */}
              <header className="bg-white dark:bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold">PLP Task Manager</h1>
                </div>
              </header>

              <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
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
              </main>

              {/* Footer component will go here */}
              <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
                  </p>
                </div>
              </footer>
            </div>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;