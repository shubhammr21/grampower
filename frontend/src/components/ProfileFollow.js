import React, { useEffect, useState } from "react"
import Axios from "axios"
import { Link, useParams } from "react-router-dom"
import LoadingDotsIcon from "./LoadingDotsIcon"

function ProfileFollow(props) {
  const { username } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source()

    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/${props.action}`, { cancelToken: ourRequest.token })
        setPosts(response.data)
        console.log(response.data)

        setIsLoading(false)
      } catch (e) {
        console.log("There was a problem")
      }
    }
    fetchPosts()
    return () => {
      ourRequest.cancel()
    }
  }, [username])

  if (isLoading) {
    return (
      <div>
        <LoadingDotsIcon />
      </div>
    )
  }

  return (
    <div className="list-group">
      {posts.map((follow, index) => {
        return (
          <Link key={index} to={`/profile/${follow.username}`} className="list-group-item list-group-item-action">
            <img className="avatar-tiny" src={follow.avatar} /> {follow.username}
          </Link>
        )
      })}
    </div>
  )
}

export default ProfileFollow
