import React, { useCallback, useEffect, useRef, useState } from 'react'
import { RankListResponse, requestRankList } from '../api'
import { TotalRankArea } from './TotalRankArea'
import TotalRankHeader from './TotalRankHeader'
import TotalRankLegend from './TotalRankLegend'
import styles from './index.module.scss'

const TotalRankListArea: React.FC = () => {
  const observer = useRef<IntersectionObserver | null>(null)

  const [rankList, setRankList] = useState<RankListResponse | null>(null)
  const [current, setCurrent] = useState(0)
  const [newSearch, setNewSearch] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [nickname, setNickname] = useState<string | null>(null)
  const [tier, setTier] = useState<string | null>(null)

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
      setLoading(true)
      const response = await requestRankList({ current, nickname, tier })
      processResponse(response)
      setLoading(false)
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
    <div className={styles['total-rank-area']}>
      <TotalRankHeader setNickname={setNickname} setTierProps={setTier} />
      <TotalRankLegend />
      <div className={styles['rank-list-area']}>
        {rankList?.ranks.map((rank, index) => {
          if (index === rankList.ranks.length - 1) {
            return (
              <TotalRankArea
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
            <TotalRankArea
              key={index}
              rank={rank.rank}
              tier={rank.tier}
              nickname={rank.nickname}
              score={rank.score}
            />
          )
        })}
      </div>
      {loading && <p> Loading... </p>}
    </div>
  )
}

export default TotalRankListArea
