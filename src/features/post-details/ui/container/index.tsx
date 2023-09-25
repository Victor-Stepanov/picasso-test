import { useParams } from 'react-router-dom'

import { useGetPostByIdQuery } from '../../model/fetchPostByIdApi'

import { PostItem } from '@/entities/post-item/post-item'
import { Loader } from '@/shared/ui/loader'

export const PostDetailsContainer = () => {
  const { postId } = useParams()
  const { data, isLoading } = useGetPostByIdQuery(postId!)
  if (isLoading) {
    return <Loader />
  }
  if (!data) {
    return
  }

  return <PostItem post={data} />
}
