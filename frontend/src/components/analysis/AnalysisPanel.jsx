// Placeholder for AnalysisPanel component
export default function AnalysisPanel() {
  return (
    <div className="h-full bg-gray-800 rounded-lg border border-gray-700 p-4">
      <h3 className="text-sm font-semibold text-gray-300 mb-4">Code Analysis</h3>
      <div className="space-y-3">
        <div className="text-sm">
          <span className="text-gray-400">Complexity:</span>
          <span className="ml-2 text-green-400">Low</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-400">Issues:</span>
          <span className="ml-2 text-yellow-400">0 warnings</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-400">Quality:</span>
          <span className="ml-2 text-blue-400">85/100</span>
        </div>
      </div>
    </div>
  )
}
