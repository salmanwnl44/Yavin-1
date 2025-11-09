import { useState } from 'react'

export default function SettingsPanel({ isOpen, onClose }) {
  const [settings, setSettings] = useState({
    theme: 'dark',
    fontSize: 14,
    fontFamily: 'Fira Code',
    tabSize: 2,
    wordWrap: false,
    minimap: true,
    lineNumbers: true,
    autoSave: false,
  })

  const handleChange = (key, value) => {
    setSettings({ ...settings, [key]: value })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4 p-6 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">Settings</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-xl"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          {/* Theme */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Theme
            </label>
            <select
              value={settings.theme}
              onChange={(e) => handleChange('theme', e.target.value)}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="vs-dark">VS Dark</option>
              <option value="hc-black">High Contrast</option>
            </select>
          </div>

          {/* Font Size */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Font Size: {settings.fontSize}px
            </label>
            <input
              type="range"
              min="10"
              max="24"
              value={settings.fontSize}
              onChange={(e) => handleChange('fontSize', parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Font Family */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Font Family
            </label>
            <select
              value={settings.fontFamily}
              onChange={(e) => handleChange('fontFamily', e.target.value)}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Fira Code">Fira Code</option>
              <option value="Consolas">Consolas</option>
              <option value="Monaco">Monaco</option>
              <option value="Courier New">Courier New</option>
            </select>
          </div>

          {/* Tab Size */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tab Size
            </label>
            <select
              value={settings.tabSize}
              onChange={(e) => handleChange('tabSize', parseInt(e.target.value))}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={8}>8 spaces</option>
            </select>
          </div>

          {/* Toggle Options */}
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">Word Wrap</span>
              <input
                type="checkbox"
                checked={settings.wordWrap}
                onChange={(e) => handleChange('wordWrap', e.target.checked)}
                className="w-5 h-5 text-blue-600 bg-gray-900 border-gray-700 rounded focus:ring-blue-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">Show Minimap</span>
              <input
                type="checkbox"
                checked={settings.minimap}
                onChange={(e) => handleChange('minimap', e.target.checked)}
                className="w-5 h-5 text-blue-600 bg-gray-900 border-gray-700 rounded focus:ring-blue-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">Line Numbers</span>
              <input
                type="checkbox"
                checked={settings.lineNumbers}
                onChange={(e) => handleChange('lineNumbers', e.target.checked)}
                className="w-5 h-5 text-blue-600 bg-gray-900 border-gray-700 rounded focus:ring-blue-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">Auto Save</span>
              <input
                type="checkbox"
                checked={settings.autoSave}
                onChange={(e) => handleChange('autoSave', e.target.checked)}
                className="w-5 h-5 text-blue-600 bg-gray-900 border-gray-700 rounded focus:ring-blue-500"
              />
            </label>
          </div>

          {/* Save Button */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-700">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                console.log('Settings saved:', settings)
                onClose()
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
