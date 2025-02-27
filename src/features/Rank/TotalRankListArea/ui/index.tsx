import { useCallback, useEffect, useRef, useState } from 'react'
import { RankListResponse, requestRankList } from '../api'
import TotalRankArea from './TotalRankArea'
import TotalRankHeader from './TotalRankHeader'
import TotalRankLegend from './TotalRankLegend'
import styles from './index.module.scss'

const TotalRankListArea: React.FC = () => {
  const [rankList, setRankList] = useState<RankListResponse | null>(null)
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [hasMore, setHasMore] = useState<boolean>(true)

  const observer = useRef<IntersectionObserver | null>(null)

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCurrent((prev) => prev + 1)
        }
      })

      if (node) observer.current.observe(node)
    },
    [hasMore],
  )

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await requestRankList({ current })
      setRankList((prev) => {
        if (prev) {
          return {
            ...prev,
            ranks: [...prev.ranks, ...response.ranks],
          }
        }
        return response
      })
      if (response.ranks.length === 0) {
        setHasMore(false)
      }
      setLoading(false)
    }
    fetchData()
  }, [current])

  return (
    <div className={styles['total-rank-area']}>
      <TotalRankHeader />
      <TotalRankLegend />
      <div className={styles['rank-list-area']}>
        {rankList?.ranks.map((rank, index) => {
          if (index === rankList.ranks.length - 1) {
            return (
              <TotalRankArea
                key={rank.rank}
                ref={lastItemRef}
                rank={rank.rank}
                tier={rank.tier}
                nickname={rank.nickname}
                score={rank.score}
              />
            )
          }
          return (
            <TotalRankArea
              key={rank.rank}
              rank={rank.rank}
              tier={rank.tier}
              nickname={rank.nickname}
              score={rank.score}
            />
          )
        })}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default TotalRankListArea
