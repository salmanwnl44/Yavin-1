import { useState } from 'react'
import FileTree from './FileTree'
import CodeEditor from './CodeEditor'
import TabBar from './TabBar'
import StatusBar from './StatusBar'
import SettingsPanel from './SettingsPanel'
import ChatPanel from '../chat/ChatPanel'
import AnalysisPanel from '../analysis/AnalysisPanel'

export default function EditorLayout() {
  const [openTabs, setOpenTabs] = useState([])
  const [activeTabId, setActiveTabId] = useState(null)
  const [editorContent, setEditorContent] = useState('')
  const [currentLanguage, setCurrentLanguage] = useState('javascript')
  const [showSettings, setShowSettings] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ line: 1, column: 1 })

  const handleFileSelect = (file) => {
    // Check if file is already open
    const existingTab = openTabs.find(tab => tab.id === file.id)
    
    if (existingTab) {
      setActiveTabId(file.id)
    } else {
      // Add new tab
      const newTab = {
        id: file.id,
        name: file.name,
        language: file.language || 'javascript',
        content: `// ${file.name}\n\n`,
        modified: false,
        icon: '📄'
      }
      setOpenTabs([...openTabs, newTab])
      setActiveTabId(file.id)
      setEditorContent(newTab.content)
      setCurrentLanguage(newTab.language)
    }
  }

  const handleTabChange = (tabId) => {
    setActiveTabId(tabId)
    const tab = openTabs.find(t => t.id === tabId)
    if (tab) {
      setEditorContent(tab.content)
      setCurrentLanguage(tab.language)
    }
  }

  const handleTabClose = (tabId) => {
    const newTabs = openTabs.filter(tab => tab.id !== tabId)
    setOpenTabs(newTabs)
    
    if (activeTabId === tabId) {
      if (newTabs.length > 0) {
        setActiveTabId(newTabs[0].id)
        setEditorContent(newTabs[0].content)
      } else {
        setActiveTabId(null)
        setEditorContent('')
      }
    }
  }

  const handleEditorChange = (value) => {
    setEditorContent(value)
    // Mark tab as modified
    setOpenTabs(openTabs.map(tab => 
      tab.id === activeTabId ? { ...tab, content: value, modified: true } : tab
    ))
  }

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-gray-800 border-b border-gray-700 px-4 py-2">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-white">YAVIN 1</h1>
          <span className="text-sm text-gray-400">AI Code Editor</span>
        </div>
        <button
          onClick={() => setShowSettings(true)}
          className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
        >
          ⚙️ Settings
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - File Tree */}
        <div className="w-64 border-r border-gray-700">
          <FileTree onFileSelect={handleFileSelect} />
        </div>

        {/* Center - Editor */}
        <div className="flex-1 flex flex-col">
          <TabBar
            tabs={openTabs}
            activeTab={activeTabId}
            onTabChange={handleTabChange}
            onTabClose={handleTabClose}
          />
          <div className="flex-1">
            {activeTabId ? (
              <CodeEditor
                value={editorContent}
                onChange={handleEditorChange}
                language={currentLanguage}
              />
            ) : (
              <div className="h-full flex items-center justify-center bg-gray-900 text-gray-500">
                <div className="text-center">
                  <div className="text-4xl mb-4">📝</div>
                  <div className="text-lg">No file open</div>
                  <div className="text-sm mt-2">Select a file from the explorer to start editing</div>
                </div>
              </div>
            )}
          </div>
          <StatusBar
            line={cursorPosition.line}
            column={cursorPosition.column}
            language={currentLanguage}
          />
        </div>

        {/* Right Sidebar - Chat & Analysis */}
        <div className="w-80 border-l border-gray-700 flex flex-col">
          <div className="flex-1 border-b border-gray-700">
            <ChatPanel />
          </div>
          <div className="flex-1">
            <AnalysisPanel />
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <SettingsPanel isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  )
}
