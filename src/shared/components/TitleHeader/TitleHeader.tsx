import { TitleHeaderProps } from './TitleHeader.types'

const TitleHeader: React.FC<TitleHeaderProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default TitleHeader
