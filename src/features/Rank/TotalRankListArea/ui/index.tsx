import { useCallback, useEffect, useRef, useState } from 'react'
import {
  RankListResponse,
  requestRankList,
  requestRankListSearch,
} from '../api'
import TotalRankArea from './TotalRankArea'
import TotalRankHeader from './TotalRankHeader'
import TotalRankLegend from './TotalRankLegend'
import styles from './index.module.scss'

const TotalRankListArea: React.FC = () => {
  const [rankList, setRankList] = useState<RankListResponse | null>(null)
  const [rankListLength, setRankListLength] = useState<number>(10)
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [nickname, setNickname] = useState<string | null>(null)
  const [tier, setTier] = useState<string | null>(null)
  const [fetchMode, setFetchMode] = useState<'NORMAL' | 'SEARCH'>('NORMAL')
  const observer = useRef<IntersectionObserver | null>(null)

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCurrent((prev) => prev + rankListLength)
        }
      })

      if (node) observer.current.observe(node)
    },
    [hasMore],
  )

  useEffect(() => {
    setCurrent(0)
    setRankList(null)
    setHasMore(true)
    const fetchData = async () => {
      console.log(hasMore)
      setLoading(true)
      let response: RankListResponse
      if (!nickname && !tier) {
        setFetchMode('NORMAL')
        response = await requestRankList({ current })
      } else {
        setFetchMode('SEARCH')
        response = await requestRankListSearch({
          current,
          nickname,
          tier,
        })
      }
      processResponse(response)
      setLoading(false)
    }
    fetchData()
  }, [nickname, tier])

  useEffect(() => {
    if (current === 0) return

    const fetchData = async () => {
      setLoading(true)
      let response: RankListResponse
      if (fetchMode == 'NORMAL') {
        response = await requestRankList({ current })
      } else if (fetchMode == 'SEARCH') {
        response = await requestRankListSearch({
          current,
          nickname,
          tier,
        })
      } else {
        return
      }
      processResponse(response)
      setLoading(false)
    }
    fetchData()
  }, [current])

  const processResponse = (response: RankListResponse) => {
    setRankListLength(response.ranks.length)
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
      <TotalRankHeader setNickname={setNickname} />
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
