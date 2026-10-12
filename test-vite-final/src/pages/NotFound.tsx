export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <h2 className="text-4xl font-bold text-white">Page Not Found</h2>
        <p className="text-xl text-slate-300">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <a href="/" className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
          Back to Home
        </a>
      </div>
    </div>
  )
}
