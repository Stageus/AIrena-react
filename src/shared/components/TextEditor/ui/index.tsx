import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import React, { useEffect, useRef } from 'react'
import option from '../libs/option'

interface TextEditorProps {
  content?: string
  setContent: (content: string) => void
}

const TextEditor: React.FC<TextEditorProps> = ({ setContent, content }) => {
  const editorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, option)
      if (content) {
        quill.root.innerHTML = content
      }
      quill.on('text-change', () => {
        setContent(quill.root.innerHTML)
      })
    }
  }, [])

  return (
    <div id="editor-container">
      <div id="editor" ref={editorRef}></div>
    </div>
  )
}

export default TextEditor
