import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-6 border-b border-gray-700">
        <h1 className="text-3xl font-bold">YAVIN 1 - AI Editor</h1>
        <p className="text-gray-400 mt-2">Advanced AI Code Analysis & Generation</p>
      </header>
      
      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Welcome to YAVIN 1</h2>
            <p className="text-gray-300 mb-6">
              Frontend scaffold initialized. Ready for development.
            </p>
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Count: {count}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
