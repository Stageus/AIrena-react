import { SearchIcon } from '#shared/icons'
import { useState } from 'react'
import styles from './index.module.scss'

interface TotalRankHeaderProps {
  setNickname: (nickname: string) => void
  setTierProps: (tier: string | null) => void
}

const TotalRankHeader: React.FC<TotalRankHeaderProps> = ({
  setNickname,
  setTierProps: setTierProps,
}) => {
  const [active, setActive] = useState<boolean>(false)
  const [selectedTier, setSelectedTier] = useState<string>('티어 선택')
  const toggleActive = () => {
    setActive(!active)
  }
  const setTier = (tier: string | null) => {
    if (tier === null) {
      setSelectedTier('티어 선택')
    }
    if (tier === 'DIAMOND') {
      setSelectedTier('다이아몬드')
    }
    if (tier === 'PLATINUM') {
      setSelectedTier('플래티넘')
    }
    if (tier === 'GOLD') {
      setSelectedTier('골드')
    }
    if (tier === 'SILVER') {
      setSelectedTier('실버')
    }
    if (tier === 'BRONZE') {
      setSelectedTier('브론즈')
    }
    setActive(false)
    setTierProps(tier)
  }

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
        <div className={styles['tier-select-area']}>
          <div onClick={toggleActive} className={styles['tier-select']}>
            <img
              src="https://image-resource.creatie.ai/150880125742532/150880125742534/ef0d5f9b0dd3ddc582782e4f4b44dd00.png"
              className={styles['select-icon']}
            />
            <div className={styles['text-1']}>{selectedTier}</div>
          </div>
          {active && (
            <>
              <div
                onClick={() => setTier(null)}
                className={styles['tier-select']}
              >
                <div className={styles['text-1']}>전체 티어</div>
              </div>
              <div
                onClick={() => setTier('DIAMOND')}
                className={styles['tier-select']}
              >
                <div className={styles['text-1']}>다이아몬드</div>
              </div>
              <div
                onClick={() => setTier('PLATINUM')}
                className={styles['tier-select']}
              >
                <div className={styles['text-1']}>플래티넘</div>
              </div>
              <div
                onClick={() => setTier('GOLD')}
                className={styles['tier-select']}
              >
                <div className={styles['text-1']}>골드</div>
              </div>
              <div
                onClick={() => setTier('SILVER')}
                className={styles['tier-select']}
              >
                <div className={styles['text-1']}>실버</div>
              </div>
              <div
                onClick={() => setTier('BRONZE')}
                className={styles['tier-select']}
              >
                <div className={styles['text-1']}>브론즈</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TotalRankHeader
