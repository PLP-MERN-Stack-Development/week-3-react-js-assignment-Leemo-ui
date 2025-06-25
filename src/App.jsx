import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import About from './pages/About';

function App() {
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
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <TaskManager />
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
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;