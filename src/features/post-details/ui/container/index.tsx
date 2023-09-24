import { PostBody } from "@/entities/post-body";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../model/fetchPostByIdApi";

export const PostDetailsContainer = () => {
  const { postId } = useParams();
  const { data, isLoading } = useGetPostByIdQuery(postId!);
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (!data) {
    return;
  }

  return <PostBody body={data?.body} title={data?.title} />;
};
