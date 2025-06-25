import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <header className="bg-blue-600 text-white p-4 shadow">
        <h1 className="text-2xl font-bold">PLP Task Manager</h1>
        <p className="text-sm">Your simple and efficient to-do assistant</p>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
