import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPostByIdThunk } from './postSlice'

const PostDetail = ({ postId }) => {
   const dispatch = useDispatch()
   const post = useSelector((state) => state.posts.post)
   const loading = useSelector((state) => state.posts.loading)
   const error = useSelector((state) => state.posts.error)

   useEffect(() => {
      dispatch(fetchPostByIdThunk(postId))
   }, [dispatch, postId])

   if (loading) return <div>Loading...</div>
   if (error) return <div>{error}</div>

   return (
      <div>
         <p>{post?.content}</p>
         {/* 게시물의 다른 속성들 출력 */}
      </div>
   )
}

export default PostDetail
