export default function NotFound() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="text-center px-6 max-w-md">
        {/* SVG Illustration */}
        <svg
          className="mx-auto mb-6 w-32 h-32 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m0 0l3-3m-3 3l-3-3M4 4l16 16M4 20L20 4"
          />
        </svg>

        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">Whoop's some things went wroung!!!</p>
        <p className="mt-2 text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-red-600 text-white px-5 py-3 rounded-md hover:bg-red-700 transition"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}
