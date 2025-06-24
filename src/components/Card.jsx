export default function Card({ title, children }) {
  return (
    <div className="border rounded shadow-md p-4 bg-white dark:bg-gray-800 transition-transform hover:scale-105 duration-300">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
}
