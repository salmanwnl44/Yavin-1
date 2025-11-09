// Placeholder for ChatPanel component
export default function ChatPanel() {
  return (
    <div className="h-full bg-gray-800 rounded-lg border border-gray-700 p-4 flex flex-col">
      <h3 className="text-sm font-semibold text-gray-300 mb-4">AI Chat</h3>
      <div className="flex-1 overflow-y-auto mb-4">
        <p className="text-gray-400 text-sm">Chat interface will be implemented here</p>
      </div>
      <input
        type="text"
        placeholder="Ask AI..."
        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
      />
    </div>
  )
}
