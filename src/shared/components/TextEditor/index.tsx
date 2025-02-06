import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { useEffect, useRef } from 'react'
import './index.module.css'

const TextEditor = () => {
  const editorRef = useRef<HTMLDivElement | null>(null)
  const quillInstance = useRef<Quill | null>(null)

  useEffect(() => {
    const option = {
      modules: {
        toolbar: true,
      },
      placeholder: '내용을 입력해주세요',
      theme: 'snow',
    }

    if (editorRef.current && !quillInstance.current) {
      const quill = new Quill(editorRef.current, option)
      quillInstance.current = quill
    }
  }, [])

  return <div id="editor" ref={editorRef}></div>
}

export default TextEditor
