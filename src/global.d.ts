declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.jpeg' {
  const value: string
  export default value
}

declare module '*.svg' {
  import React from 'react'
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >
  const src: string
  export default src
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
