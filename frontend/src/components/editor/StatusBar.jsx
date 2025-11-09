import { useState } from 'react'

export default function StatusBar({ 
  line = 1, 
  column = 1, 
  language = 'JavaScript', 
  encoding = 'UTF-8',
  lineEnding = 'LF'
}) {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)

  const languages = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go', 'Rust', 
    'HTML', 'CSS', 'JSON', 'Markdown', 'YAML'
  ]

  return (
    <div className="flex items-center justify-between bg-gray-800 border-t border-gray-700 px-4 py-1 text-xs">
      <div className="flex items-center space-x-4">
        <div className="text-gray-400">
          Ln {line}, Col {column}
        </div>
        <div className="text-gray-400">
          {encoding}
        </div>
        <div className="text-gray-400">
          {lineEnding}
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={() => setShowLanguageSelector(!showLanguageSelector)}
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            {language}
          </button>
          {showLanguageSelector && (
            <div className="absolute bottom-full right-0 mb-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {languages.map((lang) => (
                <div
                  key={lang}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-gray-300"
                  onClick={() => {
                    setShowLanguageSelector(false)
                    // Language change handler would go here
                  }}
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="text-gray-400">
          ⚡ YAVIN 1
        </div>
      </div>
    </div>
  )
}
