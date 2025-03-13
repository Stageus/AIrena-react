import { UUID } from 'crypto'

export interface FileWithID {
  file: File
  id: UUID
}

export interface UrlWithID {
  url: string
  id: UUID
}
