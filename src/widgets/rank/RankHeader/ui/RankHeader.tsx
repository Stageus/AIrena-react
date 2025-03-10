import { SearchIcon } from '#shared/icons'
import { useState } from 'react'
import { ConvertToKoreanTier } from '../model'
import styles from './RankHeader.module.scss'

interface RankHeaderProps {
  setNickname: (nickname: string) => void
  setTierProps: (tier: string | null) => void
}

export const RankHeader: React.FC<RankHeaderProps> = ({
  setNickname,
  setTierProps: setTierProps,
}) => {
  const [active, setActive] = useState<boolean>(false)
  const [selectedTier, setSelectedTier] = useState<string>('티어 선택')

  const toggleActive = () => {
    setActive(!active)
  }

  const setTier = (tier: string) => {
    setSelectedTier(ConvertToKoreanTier(tier))
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
                onClick={() => setTier('TIER_CHOOSE')}
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
