export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-white">
          Welcome to <span className="text-blue-500">Aakar</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl">
          Professional Frontend Scaffolding Framework
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Get Started
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Learn More
          </button>
        </div>

        <div className="mt-16 text-slate-400">
          <p>Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </div>
  )
}
