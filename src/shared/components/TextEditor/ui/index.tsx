import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { useEffect, useRef, useState } from 'react'
import option from '../model/option'
import './index.module.css'

const TextEditor = () => {
  const editorRef = useRef<HTMLDivElement | null>(null)
  const quillInstance = useRef<Quill | null>(null)

  const [content, setContent] = useState('')

  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      const quill = new Quill(editorRef.current, option)
      quillInstance.current = quill
      quill.on('text-change', () => {
        setContent(quill.root.innerHTML)
      })
    }
  }, [])

  console.log(content)
  return (
    <div id="editor-container">
      <div id="editor" ref={editorRef}></div>
    </div>
  )
}

export default TextEditor
