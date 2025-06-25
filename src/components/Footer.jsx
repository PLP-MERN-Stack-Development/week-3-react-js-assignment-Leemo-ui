// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-6">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} PLP Task Manager. All rights reserved.</p>
      </div>
    </footer>
  );
}
