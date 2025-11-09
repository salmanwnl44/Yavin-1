import { useRef, useState } from 'react'
import Editor from '@monaco-editor/react'

export default function CodeEditor({ 
  value = '', 
  onChange, 
  language = 'javascript',
  theme = 'vs-dark',
  readOnly = false 
}) {
  const editorRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
    setIsLoading(false)

    // Configure editor options
    editor.updateOptions({
      minimap: { enabled: true },
      fontSize: 14,
      fontFamily: 'Fira Code, Consolas, monospace',
      lineNumbers: 'on',
      rulers: [80, 120],
      wordWrap: 'off',
      scrollBeyondLastLine: false,
      automaticLayout: true,
      bracketPairColorization: { enabled: true },
      guides: {
        indentation: true,
        bracketPairs: true
      }
    })

    // Add custom keybindings
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      console.log('Save triggered')
      // Trigger save action
    })
  }

  function handleEditorChange(value) {
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <div className="h-full bg-gray-900 rounded-lg border border-gray-700 overflow-hidden relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="text-gray-400">Loading editor...</div>
        </div>
      )}
      <Editor
        height="100%"
        defaultLanguage={language}
        language={language}
        value={value}
        theme={theme}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        options={{
          readOnly: readOnly,
          selectOnLineNumbers: true,
          roundedSelection: false,
          scrollbar: {
            vertical: 'visible',
            horizontal: 'visible'
          }
        }}
      />
    </div>
  )
}
