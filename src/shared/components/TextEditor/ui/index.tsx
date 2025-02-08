import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { useEffect, useRef } from 'react'
import option from '../model/option'
import './index.module.css'

interface TextEditorProps {
  setContent: (content: string) => void
}

const TextEditor: React.FC<TextEditorProps> = ({ setContent }) => {
  const editorRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, option)
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
