import React from "react";
import { useGetPostsQuery } from "../../model/fetchPostsApi";
import { PostList } from "../post-list";

export const PostListContainer = () => {
  const [page, setPage] = React.useState(1);
  const { data: posts, isLoading } = useGetPostsQuery(page);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!posts) {
    return;
  }

  return <PostList posts={posts} />;
};
