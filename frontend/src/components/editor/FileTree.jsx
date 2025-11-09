import { useState } from 'react'

// Sample file tree structure
const sampleFiles = [
  {
    id: '1',
    name: 'src',
    type: 'folder',
    children: [
      { id: '2', name: 'App.jsx', type: 'file', language: 'javascript' },
      { id: '3', name: 'main.jsx', type: 'file', language: 'javascript' },
      { id: '4', name: 'index.css', type: 'file', language: 'css' },
      {
        id: '5',
        name: 'components',
        type: 'folder',
        children: [
          { id: '6', name: 'Button.jsx', type: 'file', language: 'javascript' },
          { id: '7', name: 'Input.jsx', type: 'file', language: 'javascript' },
        ]
      }
    ]
  },
  { id: '8', name: 'package.json', type: 'file', language: 'json' },
  { id: '9', name: 'vite.config.js', type: 'file', language: 'javascript' },
]

function FileTreeItem({ item, level = 0, onFileClick, selectedId }) {
  const [isOpen, setIsOpen] = useState(level === 0)

  const handleClick = () => {
    if (item.type === 'folder') {
      setIsOpen(!isOpen)
    } else {
      onFileClick(item)
    }
  }

  const isSelected = selectedId === item.id
  const paddingLeft = `${level * 16 + 8}px`

  return (
    <div>
      <div
        onClick={handleClick}
        className={`flex items-center px-2 py-1 cursor-pointer hover:bg-gray-700 transition-colors ${
          isSelected ? 'bg-gray-700 text-blue-400' : 'text-gray-300'
        }`}
        style={{ paddingLeft }}
      >
        {item.type === 'folder' && (
          <span className="mr-1 text-xs">
            {isOpen ? '📂' : '📁'}
          </span>
        )}
        {item.type === 'file' && (
          <span className="mr-1 text-xs">📄</span>
        )}
        <span className="text-sm truncate">{item.name}</span>
      </div>
      {item.type === 'folder' && isOpen && item.children && (
        <div>
          {item.children.map((child) => (
            <FileTreeItem
              key={child.id}
              item={child}
              level={level + 1}
              onFileClick={onFileClick}
              selectedId={selectedId}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function FileTree({ onFileSelect }) {
  const [selectedId, setSelectedId] = useState(null)

  const handleFileClick = (file) => {
    setSelectedId(file.id)
    if (onFileSelect) {
      onFileSelect(file)
    }
  }

  return (
    <div className="h-full bg-gray-800 rounded-lg border border-gray-700 overflow-y-auto">
      <div className="sticky top-0 bg-gray-800 border-b border-gray-700 px-3 py-2 z-10">
        <h3 className="text-sm font-semibold text-gray-300">Explorer</h3>
      </div>
      <div className="py-1">
        {sampleFiles.map((item) => (
          <FileTreeItem
            key={item.id}
            item={item}
            onFileClick={handleFileClick}
            selectedId={selectedId}
          />
        ))}
      </div>
    </div>
  )
}
