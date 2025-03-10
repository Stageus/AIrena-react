import { Content, Legend } from '#entities/rank'
import { RankHeader } from '#widgets/rank'
import { useCallback, useEffect, useRef, useState } from 'react'
import { RankListResponse, requestRankList } from '../api'
import styles from './RankPage.module.scss'

export const RankPage: React.FC = () => {
  const [rankList, setRankList] = useState<RankListResponse | null>(null)
  const [current, setCurrent] = useState(0)
  const [newSearch, setNewSearch] = useState<boolean>(false)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [nickname, setNickname] = useState<string | null>(null)
  const [tier, setTier] = useState<string | null>(null)

  const observer = useRef<IntersectionObserver | null>(null)
  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCurrent((prev) => prev + 10)
        }
      })

      if (node) observer.current.observe(node)
    },
    [hasMore],
  )

  useEffect(() => {
    setCurrent(0)
    setNewSearch((prev) => !prev)
    setRankList(null)
    setHasMore(true)
  }, [nickname, tier])

  useEffect(() => {
    const fetchData = async () => {
      const response = await requestRankList({
        current,
        nickname,
        tier,
      })
      if (response.status === 200) {
        processResponse(response.data)
      }
    }
    fetchData()
  }, [current, newSearch])

  const processResponse = (response: RankListResponse) => {
    setRankList((prev) => {
      if (prev) {
        return {
          ranks: [...prev.ranks, ...response.ranks],
        }
      }
      return response
    })
    if (response.ranks.length === 0) {
      setHasMore(false)
    }
  }

  return (
    <div className={styles['total-rank-container']}>
      <div className={styles['total-rank-area']}>
        <RankHeader setNickname={setNickname} setTierProps={setTier} />
        <Legend />
        <div className={styles['rank-list-area']}>
          {rankList?.ranks.map((rank, index) => {
            if (index === rankList.ranks.length - 1) {
              return (
                <Content
                  key={index}
                  ref={lastItemRef}
                  rank={rank.rank}
                  tier={rank.tier}
                  nickname={rank.nickname}
                  score={rank.score}
                />
              )
            }
            return (
              <Content
                key={index}
                rank={rank.rank}
                tier={rank.tier}
                nickname={rank.nickname}
                score={rank.score}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
