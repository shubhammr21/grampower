import { useEffect, useState } from "react"
import Axios from "../Axios"

export default function FetchStore(pageNumber) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [stores, setStores] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setError(false)
    Axios.get("/api/stores/", {
      params: {
        page: pageNumber
      }
    })
      .then(res => {
        setStores(prevStore => {
          return [...prevStore, ...res.data.results]
        })
        setHasMore(res.data.next !== null)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        setError(true)
      })
  }, [pageNumber])
  return { isLoading, error, stores, hasMore }
}
