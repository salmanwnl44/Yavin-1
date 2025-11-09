import { useState } from 'react'

export default function TabBar({ tabs = [], activeTab, onTabChange, onTabClose }) {
  const [hoveredTab, setHoveredTab] = useState(null)

  return (
    <div className="flex items-center bg-gray-800 border-b border-gray-700 overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex items-center px-4 py-2 border-r border-gray-700 cursor-pointer group relative min-w-0 ${
            activeTab === tab.id
              ? 'bg-gray-900 text-blue-400'
              : 'text-gray-400 hover:bg-gray-750 hover:text-gray-200'
          }`}
          onClick={() => onTabChange(tab.id)}
          onMouseEnter={() => setHoveredTab(tab.id)}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <span className="text-xs mr-2">{tab.icon || '📄'}</span>
          <span className="text-sm truncate max-w-[120px]">{tab.name}</span>
          {tab.modified && (
            <span className="ml-2 text-xs text-yellow-500">●</span>
          )}
          {(hoveredTab === tab.id || activeTab === tab.id) && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onTabClose(tab.id)
              }}
              className="ml-2 text-gray-500 hover:text-gray-200 transition-colors"
            >
              ✕
            </button>
          )}
        </div>
      ))}
      {tabs.length === 0 && (
        <div className="px-4 py-2 text-sm text-gray-500">
          No files open
        </div>
      )}
    </div>
  )
}
