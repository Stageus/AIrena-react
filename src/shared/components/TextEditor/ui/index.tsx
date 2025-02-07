import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { useEffect, useRef, useState } from 'react'
import option from '../model/option'
import './index.module.css'

const TextEditor = () => {
  const [content, setContent] = useState('')

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
