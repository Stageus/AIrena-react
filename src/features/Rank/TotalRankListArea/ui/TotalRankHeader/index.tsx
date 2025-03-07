import { ReactComponent as SearchIcon } from '#assets/icons/search_icon.svg'
import styles from './index.module.scss'

interface TotalRankHeaderProps {
  setNickname: (nickname: string) => void
}

const TotalRankHeader: React.FC<TotalRankHeaderProps> = ({ setNickname }) => {
  return (
    <div className={styles['total-rank-header']}>
      <div className={styles['text']}>전체 유저순위</div>
      <div className={styles['search-area']}>
        <div className={styles['nickname-search-box']}>
          <SearchIcon className={styles['search-icon']} />
          <input
            type="text"
            className={styles['placeholder']}
            placeholder="닉네임 검색"
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className={styles['tier-select']}>
          <img
            src="https://image-resource.creatie.ai/150880125742532/150880125742534/ef0d5f9b0dd3ddc582782e4f4b44dd00.png"
            className={styles['select-icon']}
          />
          <div className={styles['text-1']}>전체 티어</div>
        </div>
      </div>
    </div>
  )
}

export default TotalRankHeader
